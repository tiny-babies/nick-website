package com.johnson.jugtours;



import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class JugtoursApplication {

	public static void main(String[] args) {
		SpringApplication.run(JugtoursApplication.class, args);
	}

	// @Value("${cloudinary-key:}")
	// String apiKey;
	// @Value("${cloudinary-cloud-name:}")
	// String cloudName;
	// @Value("${cloudinary-secret:}")
	// String apiSecret;


}
