package com.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(EntityNotFindException.class)
    public ResponseEntity<?> entityNotFoundHandler(EntityNotFindException e){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }



}
