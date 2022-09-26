import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
import { finalize, from, map, Observable, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubirimagenesService {

  constructor(private storage:Storage) { }

  uploadImage(image : File, path:string):Observable<string>{
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef,image));
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref))
    );

  }
}
