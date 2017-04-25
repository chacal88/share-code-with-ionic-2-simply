
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class TestExtensionActions {

    static TEST_ACTION = 'TEST_ACTION';
    fireTestAction(): Action {
        return {
            type: TestExtensionActions.TEST_ACTION,
            payload: 'Hello World'
        };
    }
}
