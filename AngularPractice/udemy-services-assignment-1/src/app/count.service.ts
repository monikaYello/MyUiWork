export class CountService {
    count = 0;

    doCount(){
        this.count +=1;
        console.log(this.count)
    }

}