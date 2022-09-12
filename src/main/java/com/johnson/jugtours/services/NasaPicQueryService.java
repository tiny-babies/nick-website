package com.johnson.jugtours.services;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.client.RestTemplate;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

@Slf4j
@Service
public class NasaPicQueryService {

    ObjectMapper mapper = new ObjectMapper();

    private final RestTemplate restTemplate;

    public NasaPicQueryService(RestTemplateBuilder restTemplateBuilder) {
        restTemplate = restTemplateBuilder.build();
    }

    
    @Value("${nasa-key:}")
    String NASA_KEY;


    public static final String ENDPOINT = "https://api.nasa.gov/planetary/apod?api_key={NASA_KEY}";

    public String getJSON() throws HttpClientErrorException {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>(headers);
        Map<String, String> uriVariables = Map.of("NASA_KEY", NASA_KEY);


        ResponseEntity<String> re = restTemplate.exchange(ENDPOINT, HttpMethod.GET, entity, String.class, uriVariables);
        return re.getBody();
    }

}