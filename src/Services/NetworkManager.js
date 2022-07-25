import axios from './Axios/axios';
import {PROCESS_AND_STORE, SEARCH_KEYWORD} from '../Constants/constants';
import {GET_USER_DATA} from '../Constants/constants';

export default class NetworkManager {
  static GET_USER_DATA(page) {
    // console.warn(page);

    return axios.get(`${GET_USER_DATA}${page}`);
    // return axios.get(`photos?_limit=10&_page= ${page}`);
  }

  // static ProcessAndStore(bucket, outputFolder, copyFolder, files) {
  //   const request = {
  //     bucket: bucket,
  //     output_folder: outputFolder,
  //     copy_folder: copyFolder,
  //     keys: files
  //   };
  //   const data = JSON.stringify(request);
  //   console.log(data);
  //   return axios.post(`${PROCESS_AND_STORE}`, data);
  // }

  // static SearchKeyword(bucket, keyword, period, outputFolder, copyFolder, pathlist) {
  //   const request = {
  //     bucket: bucket,
  //     keyword: keyword,
  //     date: period,
  //     output_folder: outputFolder,
  //     copy_pdf_folder: copyFolder,
  //     pathlist: pathlist,
  //   };
  //   const data = JSON.stringify(request);
  //   console.log(data);
  //   return axios.post(`${SEARCH_KEYWORD}`, data);
  // }
  //   static SubmitAnswer(
  //     step: string,
  //     answer: string[],
  //     gameType: string = GameTypes.TT,
  //     language: string = GameLanguages.DUTCH
  //   ): Promise<AxiosResponse<any>> {
  //     const request = {
  //       gameStep: step + "",
  //       answer: answer,
  //     };
  //     const data = JSON.stringify(request);
  //     console.log(data);
  //     return axios.post(`${language}/${gameType}/${SUBMIT_ANSWER_API}`, data);
  //   }

  //   static GetCodeResult(
  //     codes: string[],
  //     gameType: string = GameTypes.TT,
  //     language: string = GameLanguages.DUTCH
  //   ): Promise<AxiosResponse<any>> {
  //     const request = {
  //       gameType: gameType,
  //       gameCodes: codes,
  //     };
  //     const data = JSON.stringify(request);
  //     console.log(data);
  //     return axios.post(`${language}/${GET_CODE_RESULT}`, data);
  //   }

  //   static async RequestHint(
  //     stepNo: string,
  //     gameType: string = GameTypes.TT,
  //     language: string = GameLanguages.DUTCH
  //   ): Promise<AxiosResponse<any>> {
  //     const request = {
  //       gameStep: stepNo + "",
  //     };
  //     const data = JSON.stringify(request);
  //     console.log(data);
  //     return axios.post(`${language}/${gameType}/${REQUEST_HINT_API}`, data);
  //   }

  //   static async RequestLeaderboard(
  //     gameType: string = GameTypes.TT,
  //     language: string = GameLanguages.DUTCH
  //   ): Promise<AxiosResponse<any>> {
  //     return axios.get(`${language}/${gameType}/${LEADERBOARD_API}`);
  //   }
}
