export class DataUtils {
    static generateID(){
        return Math.round(new Date().getTime() * (Math.random()+1));
    }
}