import {  BehaviorSubject, Observable} from "rxjs";
import {ajax, AjaxResponse} from 'rxjs/ajax'
import {map, filter, switchMap, debounceTime} from 'rxjs/operators'
import constants from "../constants";
import { Stop } from "../types";

const getApiUrl = (value: string) => {
  return `${constants.api_server}/locations?poi=false&addresses=false&query=${value}`;
};

const transformResponse = ({ response }: AjaxResponse<any>) : Stop[] => {
    console.log("GetLocations")
    return response.map( (item: { [x: string]: any; }) : Stop => ({
        id: item["id"],
        name: item["name"]
    }))
}

export const getLocations = (
    subject: BehaviorSubject<string>
    ): Observable<Stop[]> => {
    console.log("GetLocations")
    return subject.pipe(
        debounceTime(500),
        //filter(v => v.length > 2),
        map(getApiUrl),
        switchMap(url => ajax(url)),
        map(transformResponse)
    )
}