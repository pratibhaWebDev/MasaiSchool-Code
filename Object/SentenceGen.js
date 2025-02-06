let sentenceBuilder={
    subject:"I",
    verb:"am",
    object:"happy",
    buildSentence:function(){
        return this.subject&& this.verb && this.object
        ? `${this.subject} ${this.verb} ${this.object}.`
        : "Incomplete Sentence"
    },
    updateProperty:function(property,value){
        if(this.hasOwnProperty(property)){
        this[property]=value;}
        else{
            return "Invalid property"
        }
    }
}

sentenceBuilder.updateProperty("verb","was")
console.log(sentenceBuilder.buildSentence())