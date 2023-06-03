import React from 'react';

function sessionstorage(name, value, type) {
    switch (key) {
        case type === 'SET':
            sessionStorage.setItem(name, value)
            
        case type === 'GET':
            sessionStorage.getItem(name)
    }
}

export default sessionstorage;