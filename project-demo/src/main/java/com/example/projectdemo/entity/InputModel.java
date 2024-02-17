package com.example.projectdemo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class InputModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer input;
    private Integer multiplyBy2;
    private Integer square;

    public InputModel(Integer input, Integer multiplyBy2, Integer square){
        this.input = input;
        this.multiplyBy2 = multiplyBy2;
        this.square = square;
    }

}
