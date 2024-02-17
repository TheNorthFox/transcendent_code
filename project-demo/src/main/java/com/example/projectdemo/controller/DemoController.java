package com.example.projectdemo.controller;

import com.example.projectdemo.entity.InputModel;
import com.example.projectdemo.repository.InputRepository;
import com.example.projectdemo.wrapper.IntegerWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/multiply")
public class DemoController {

    private final InputRepository inputRepository;

    public DemoController(InputRepository inputRepository) {
        this.inputRepository = inputRepository;
    }

    @GetMapping("/allData")
    public ResponseEntity<List<InputModel>> getAllData(){
        return new ResponseEntity<>(inputRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/calculate")
    public ResponseEntity<InputModel> inputCalculation(@RequestBody IntegerWrapper wrapper){
        Integer num = wrapper.getInput();
        int result = num * 2;
        Integer square = (int) Math.pow(result, 2);
        InputModel model = new InputModel(num, result, square);
        inputRepository.save(model);

        return  ResponseEntity.ok(model);

    }


}
