function Stock(n,t,i,v,q){

    //Initialize the instance variables below
    this.name=n;
    this.ticker=t;
    this.index=i;
    this.value=v;
    this.quantity=q;

    //declare and define totalValue function below
    this.totalValue = function(){
      return this.value * this.quantity;
    };

    //declare and define sell(q) function below
    this.sell = function(q){
      if(this.quantity >0 && q<=this.quantity){
        this.quantity = this.quantity - q;
        return this.value * q;
      }
    };

}

module.exports = Stock;
