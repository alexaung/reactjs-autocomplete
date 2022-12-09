import { Subject, Observable } from "rxjs";
import { debounceTime, map, switchMap, tap, filter } from "rxjs/operators";
import { ajax, AjaxResponse } from "rxjs/ajax";
import constants from "../constants";

const getApiUrl = (value: string) => {
    return `${constants.api_server}/locations?poi=false&addresses=false&query=${value}`;
};

const transformResponse = ({ response }: AjaxResponse<any>) => {
    return response.map(
        (item: { [x: string]: any }) => ({
            id: item["id"],
            name: item["name"],
        })
    );
};

export const getSuggestions = <T>(
    subject: Subject<string>
): Observable<T[]> => {
    return subject.pipe(
        debounceTime(300),
        //tap((s) => console.log(`In Pipe ${s}`)),
        filter((s) => s.length > 2),
        map(getApiUrl),
        switchMap((url) => ajax(url)),
        map(transformResponse)
    );
};