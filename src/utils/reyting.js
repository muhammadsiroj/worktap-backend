export const CountReyting = (oldReyting,reyting) =>{
    try {
        let Ireyting;
        
        if(oldReyting === 0){
            return Ireyting = reyting;
            
        }
  
     Ireyting = oldReyting + reyting;

     const minus = Ireyting / 2;

     Ireyting =  minus;

     if(Ireyting == 1.5){
        return Ireyting
     }
     if(Ireyting == 2.5){
        return Ireyting
     }
     if(Ireyting == 3.5){
         return Ireyting
     }
     if(Ireyting == 4.5){
        return Ireyting
     }
     if(Ireyting == 1.5){
         return Ireyting
     }
     if(Ireyting == 2.5){
        return Math.ceil(Ireyting)
    }
    if(Ireyting == 3.5){
        return Math.ceil(Ireyting)
    }
    if(Ireyting == 4.5){
        return Math.ceil(Ireyting)
    }

    const newreyting = Math.ceil(Ireyting);

     return newreyting 
    } catch (error) {
        (error);
        
    }

} 
