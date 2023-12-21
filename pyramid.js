var pyramid = 10
while (pyramid>0){
    var output1 = ""
    var output2 = "+"
    var i = 0
    while(i< pyramid){
        output1 += " "
        i = i + 1
        
        
    }   
    var j = 1
    while(j <11-pyramid){
        output2 += "++"
        j = j + 1
    }    
    console.log(output1 + output2)
    
    pyramid = pyramid -1
}