package com.johnson.jugtours.controllers;

import java.io.IOException;
import java.net.URI;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.SpotifyHttpManager;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.credentials.AuthorizationCodeCredentials;
import se.michaelthelin.spotify.model_objects.specification.Artist;
import se.michaelthelin.spotify.model_objects.specification.AudioFeatures;
import se.michaelthelin.spotify.model_objects.specification.Paging;
import se.michaelthelin.spotify.model_objects.specification.PagingCursorbased;
import se.michaelthelin.spotify.model_objects.specification.PlayHistory;
import se.michaelthelin.spotify.model_objects.specification.Track;
import se.michaelthelin.spotify.model_objects.specification.User;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest;
import se.michaelthelin.spotify.requests.data.artists.GetArtistRequest;
import se.michaelthelin.spotify.requests.data.artists.GetSeveralArtistsRequest;
import se.michaelthelin.spotify.requests.data.personalization.simplified.GetUsersTopArtistsRequest;
import se.michaelthelin.spotify.requests.data.personalization.simplified.GetUsersTopTracksRequest;
import se.michaelthelin.spotify.requests.data.player.GetCurrentUsersRecentlyPlayedTracksRequest;
import se.michaelthelin.spotify.requests.data.tracks.GetAudioFeaturesForSeveralTracksRequest;
import se.michaelthelin.spotify.requests.data.users_profile.GetCurrentUsersProfileRequest;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/spotify")
public class SpotifyController {
    
    private static final URI redirectURI = SpotifyHttpManager.makeUri("http://localhost:8080/api/spotify/spotify-auth");
    private String code = "";


    @Value("${spotify-client-id:}")
    public String CLIENT_ID;
    @Value("${spotify-client-secret:}")
    public String CLIENT_SECRET;


    // private final SpotifyApi spotifyApi = new SpotifyApi.Builder()
    //     .setClientId(CLIENT_ID)
    //     .setClientSecret(CLIENT_SECRET)
    //     .setRedirectUri(redirectURI)
    //     .build();

    private static SpotifyApi spotifyApi;





    @GetMapping("/login")
    @ResponseBody
    public String spotifyLogin() {

        //Temporary location as spotifyApi should be final.  Problem is how to initialize it.  CLIENT_ID and CLIENT_SECRET must be populated from application.properties, but this cannot be done as they are only populated after construction.
        spotifyApi = new SpotifyApi.Builder()
        .setClientId(CLIENT_ID)
        .setClientSecret(CLIENT_SECRET)
        .setRedirectUri(redirectURI)
        .build();

        AuthorizationCodeUriRequest authorizationCodeUriRequest = spotifyApi.authorizationCodeUri()
            .scope("user-read-private, user-read-email, user-top-read, user-read-recently-played")
            .show_dialog(true)
            .build();

        final URI uri = authorizationCodeUriRequest.execute();
        System.out.println("URI: " + uri.toString());
        return uri.toString();
    }

    @PostMapping("/logout")
    public void spotifyLogout(){
        spotifyApi.setAccessToken(null);
        spotifyApi.setRefreshToken(null);
    }

    // Must handle access_denied redirect after login
    // @GetMapping(value = "/spotify-auth?error=access_denied")
    // public void redirectAccessDeniedLogin(HttpServletResponse response) throws IOException {

    //     response.sendRedirect("http://localhost:3000/spotify");

    // }

    @GetMapping(value = "/spotify-auth")
    public String getSpotifyUserCode(@RequestParam("code") String userCode, HttpServletResponse response) throws IOException{
        code = userCode;

        AuthorizationCodeRequest authorizationCodeRequest = spotifyApi.authorizationCode(code).build();

        try{
            final AuthorizationCodeCredentials authorizationCodeCredentials = authorizationCodeRequest.execute();
            spotifyApi.setAccessToken(authorizationCodeCredentials.getAccessToken());
            spotifyApi.setRefreshToken(authorizationCodeCredentials.getRefreshToken());

            System.out.println("Expires in: " + authorizationCodeCredentials.getExpiresIn());
        } catch (IOException | SpotifyWebApiException | org.apache.hc.core5.http.ParseException e){
            System.out.println("Error: " + e.getMessage());
        }

        response.sendRedirect("http://localhost:3000/spotify");
        return spotifyApi.getAccessToken();

    }


    @GetMapping("/auth-token")
    public String getAuthToken() {
        return spotifyApi.getAccessToken();
    }

    @GetMapping("/get-user-profile")
    public User getUserProfile(){
        final GetCurrentUsersProfileRequest getCurrentUsersProfileRequest = spotifyApi.getCurrentUsersProfile().build();

        try{
            final User profile = getCurrentUsersProfileRequest.execute();

            return profile;
        } catch(Exception e){
            System.out.println("Something went wrong!\n" + e.getMessage());
        }
        return null;

    }



    @GetMapping("/top-artists")
    public Artist[] getUserTopArtists(@RequestParam(name = "time_range") String time_range, @RequestParam(name="limit") int limit){
        
        final GetUsersTopArtistsRequest getUsersTopArtistsRequest = spotifyApi.getUsersTopArtists()
            .time_range(time_range)
            .limit(limit)
            .build();

        try{
            final Paging<Artist> artistPaging = getUsersTopArtistsRequest.execute();

            return artistPaging.getItems();
        } catch (Exception e){
            System.out.println("Something went wrong!\n" + e.getMessage());
        }

        return new Artist[0];

    }

    @GetMapping("/recent-tracks")
    public PlayHistory[] getUserRecentTracks() {

        final GetCurrentUsersRecentlyPlayedTracksRequest getCurrentUsersRecentlyPlayedTracksRequest = spotifyApi.getCurrentUsersRecentlyPlayedTracks()
                .limit(50)
                .build();
        try {
            final PagingCursorbased<PlayHistory> trackPaging = getCurrentUsersRecentlyPlayedTracksRequest.execute();

            return trackPaging.getItems();
        } catch (Exception e) {
            System.out.println("Something went wrong!\n" + e.getMessage());
        }

        return new PlayHistory[0];

    }

    @GetMapping("/top-tracks")
    public Track[] getUserTopTracks(){
        final GetUsersTopTracksRequest getUsersTopTracksRequest = spotifyApi.getUsersTopTracks()
            .time_range("medium_term")
            .limit(50)
            .build();

        try {
            final Paging<Track> trackPaging = getUsersTopTracksRequest.execute();

            return trackPaging.getItems();
        } catch (Exception e){
            System.out.print("Something went wrong!\n" + e.getMessage());
        }

        return new Track[0];
    }

    @GetMapping("/artists-by-id")
    public Artist[] getArtistsById(@RequestParam(name="ids") String ids){

        final GetSeveralArtistsRequest getSeveralArtistsRequest = spotifyApi.getSeveralArtists(ids).build();

        try{
            final Artist[] artists = getSeveralArtistsRequest.execute();
            return artists;
        } catch(Exception e){
            System.out.print("Something went wrong!\n" + e.getMessage());
        }

        return new Artist[0];
    }



    @GetMapping("/track-audio-features")
    public AudioFeatures[] getAudioFeaturesOfTracks(@RequestParam(name="ids") String ids){

        final GetAudioFeaturesForSeveralTracksRequest getAudioFeaturesForSeveralTracksRequest = spotifyApi.getAudioFeaturesForSeveralTracks(ids).build();

        try{
            final AudioFeatures[] audioFeatures = getAudioFeaturesForSeveralTracksRequest.execute();
            return audioFeatures;
        } catch (Exception e){
            System.out.print("Something went wrong!\n" + e.getMessage());
        }

        return new AudioFeatures[0];
    }

}
