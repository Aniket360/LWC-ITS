import id from '@salesforce/user/Id';
import { LightningElement } from 'lwc';

export default class Quiz extends LightningElement {
   selected={}; //for storing answers
correctAnswers=0; //to show the result
isSubmitted=false; 

    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a templete loop?",
            answers:  {
                a: "for:each",
                b: "iterator",
                c: "map loop",
                }
                ,
            correctAnswer: "c",
        },
        {
            id: "Question2",
            question: "Which of the file is invalide in LWC component folder?",
            answers:  {
                a: ".svg",
                b: ".apex",
                c: ".js",
                }
                ,
            correctAnswer: "b",
        },
        {
            id: "Question3",
            question: "Which one of the following is not a directive?",
            answers:  {
                a: "for:each",
                b: "if:true",
                c: "@track",
                }
                ,
            correctAnswer: "c",
        },
    
        // {
        //     id: "Question4",
        //     question: "",
        //     answers:  {
        //         a: "for:each",
        //         b: "iterator", 
        //         c: "map loop",
        //         }
        //         ,
        //     correctAnswer: "c",
        // },
    ]
    // used for disabling the sumbit button
    get allNotSelected(){
        return!(Object.keys(this.selected).length === this.myQuestions.length)
    }
    // for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }
        // changeHandler get's called on every click on the options
     changeHandler(event){
         console.log( "name", event.target.name);
         console.log( "value", event.target.value);
         const {name, value} = event.target;
         this.selected={...this.selected, [name]:value}
        }
        //  form submit handler
        submitHandler(event){
         event.preventDefault()
         let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
         this.correctAnswers = correct.length
         this.isSubmitted = true
         console.log("this.correctAnswers",this.correctAnswers)
        }
        // form reset handler
        resetHandler(){
          this.selected = {}
          this.correctAnswers=0
          this.isSubmitted=false
        }
        
}
    