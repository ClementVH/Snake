function Snake(){
    this.scale = 30;
    this.pos = createVector(5,5);

    this.tail = [];
    this.tail.push(createVector(4,5));

    this.dir = createVector(1,0);

    this.food = createVector(10,5)

    this.update = function(){

        for(var i = this.tail.length -1; i >= 0; i--){

            if(i == 0) this.tail[i] = this.pos.copy();

            else this.tail[i] = this.tail[i-1].copy();

        }

        this.pos.add(this.dir);

        if(this.pos.x == this.food.x && this.pos.y == this.food.y){

            this.addTail();
            this.addFood();

        }

        if(this.pos.x * this.scale >= width) this.pos.x = 0;
        if(this.pos.x * this.scale < 0) this.pos.x = width/this.scale - 1;
        if(this.pos.y * this.scale >= height) this.pos.y = 0;
        if(this.pos.y * this.scale < 0) this.pos.y = height/this.scale - 1;

        this.checkCollision();

    }

    this.display = function(){

        fill(255,0,0);
        rect(this.pos.x * this.scale, this.pos.y * this.scale, this.scale, this.scale);

        fill(0,255,0);

        for(var i = 0; i < this.tail.length; i++){

            rect(this.tail[i].x * this.scale, this.tail[i].y * this.scale, this.scale, this.scale);

        }

        fill(0,0,255);

        rect(this.food.x * this.scale, this.food.y * this.scale, this.scale, this.scale);

        noFill();

    }

    this.addTail = function(){

        this.tail.push(createVector(-1,-1));

    }

    this.addFood = function(){

        ok = false;

        var newFood;

        while(!ok){

            var newFood = createVector(Math.floor(random(width/this.scale)), Math.floor(random(height/this.scale)));

            ok = true;

            for(var i = 0; i < this.tail.length; i++){

                if(this.tail[i].x == newFood.x && this.tail[i].y == newFood.y) ok = false;

            }

            if(this.pos.x == newFood.x && this.pos.y == newFood.y) ok = false;


        }

        this.food = newFood.copy();

    }

    this.checkCollision = function(){

        for(var i = 0; i < this.tail.length; i++){

            if(this.tail[i].x == this.pos.x && this.tail[i].y == this.pos.y){

                this.pos = createVector(5,5);

                this.tail = [];
                this.tail.push(createVector(4,5));

                this.dir = createVector(1,0);

                this.food = createVector(10,5)

            }

        }

    }

}
