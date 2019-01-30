// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
    constructor(domElement) {
        // assign this.domElement to the passed in domElement
        this.domElement = domElement;
        //console.log(this.domElement);
        // create a reference to the ".expandButton" class. 
        this.expandButton = this.domElement.querySelector('.article span');
        //Using your expandButton reference, update the text on your expandButton to say "expand"
        
        this.expandButton.innerHTML='expand';
        
        //console.log(this.domElement);
        // Set a click handler on the expandButton reference, calling the expandArticle method.
        this.expandButton.addEventListener('click', () => this.expandArticle())
    }
    
    expandArticle() {
        // Using our reference to the domElement, toggle a class to expand or hide the article.
        //console.log('expand now');
        //this.closeElement();
        
        this.domElement.classList.toggle('article-open');

        if(this.domElement.classList.contains('article-open'))
            this.expandButton.textContent = 'close'
        else{
            this.expandButton.textContent='expand'
        // TweenMax.fromTo(this.domElement, 3, 
        //     {height: 50,},
        //     {height: 400,
        //     ease: Bounce.easeOut, y: 0},
        // );
        }
    }

}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/


let articles = document.querySelectorAll('.article');

articles.forEach(item => {
    return new Article(item);
})