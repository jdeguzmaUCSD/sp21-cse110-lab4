for(const property in statistics) {
    if((property.charAt(0) == 'r') || (statistics[propety] % 2 == 1)) {
        console.log(statistics[property]); // print value of property
    }    
}