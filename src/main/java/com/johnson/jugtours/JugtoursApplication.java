package com.johnson.jugtours;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.cloudinary.Cloudinary;

@SpringBootApplication
public class JugtoursApplication {

	public static void main(String[] args) {
		SpringApplication.run(JugtoursApplication.class, args);
	}

	@Value("${cloudinary-key:}")
	String apiKey;
	@Value("${cloudinary-cloud-name:}")
	String cloudName;
	@Value("${cloudinary-secret:}")
	String apiSecret;

	@Bean
	public Cloudinary cloudinaryConfig() {
		Cloudinary cloudinary = null;
		Map config = new HashMap();
		config.put("cloud_name", cloudName);
		config.put("api_key", apiKey);
		config.put("api_secret", apiSecret);
		cloudinary = new Cloudinary(config);
		return cloudinary;
	}

}
