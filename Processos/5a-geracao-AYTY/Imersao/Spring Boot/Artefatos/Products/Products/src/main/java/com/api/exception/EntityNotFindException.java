package com.api.exception;

import java.util.UUID;

public class EntityNotFindException extends Exception {
    public EntityNotFindException(UUID id, String className) {
        super(className + " with id " + " no found.");
    }
}
