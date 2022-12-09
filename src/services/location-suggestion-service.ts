import React, { useEffect, useState } from "react";
import { Subject, Observable } from "rxjs";
import { debounceTime, map, switchMap, tap, filter } from "rxjs/operators";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Stop } from "../types";
import constants from "../constants";

const getApiUrl = (value: string) => {
    return `${constants.api_server}/locations?poi=false&addresses=false&query=${value}`;
};

const transformResponse = ({ response }: AjaxResponse<any>): Stop[] => {
    return response.map(
        (item: { [x: string]: any }): Stop => ({
            id: item["id"],
            name: item["name"],
        })
    );
};

export const getSuggestions = <S>(
    subject: Subject<string>
): Observable<Stop[]> => {
    return subject.pipe(
        debounceTime(300),
        //tap((s) => console.log(`In Pipe ${s}`)),
        filter((s) => s.length > 2),
        map(getApiUrl),
        switchMap((url) => ajax(url)),
        map(transformResponse)
    );
};