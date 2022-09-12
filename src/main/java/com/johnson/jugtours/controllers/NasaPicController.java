package com.johnson.jugtours.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.johnson.jugtours.services.NasaPicQueryService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;



@Slf4j
@RestController
@RequestMapping("/api/nasa")
public class NasaPicController {

    ObjectMapper mapper = new ObjectMapper();

    @Autowired
    NasaPicQueryService nasaPicQueryService;


    @GetMapping("/get")
    public String getPics() throws JsonProcessingException{
        return nasaPicQueryService.getJSON();
    }
}
