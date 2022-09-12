package com.johnson.jugtours.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.johnson.jugtours.model.Group;

import java.util.List;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);
}
