export class UserInfo {
    firstname:String;
    surename:String; //possible preklep surname
    email:String;
    organisation:String;
    address:String;
    companyResgistrationNumber:String;
    VAT:String;
}

export class QuestionAnswer {
    choices:String;
    paymentMethod:String;
    timeOfArrival:String;
    timeOfDeparture:String;
    tShirtSize:String;
    extraPayment:String;
    accomodation:String;
    banket:String;
    anotherTShirt:String;
    diets:String;
    roomNotes:String;
}

export class RootObject {
    userinfo: UserInfo;
    questionanswer: QuestionAnswer;
}