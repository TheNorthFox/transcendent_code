package com.example.projectdemo.repository;

import com.example.projectdemo.entity.InputModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InputRepository extends JpaRepository<InputModel, Long> {}
