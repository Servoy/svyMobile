/**
* Simulate Pressing the back button on header
*/
function goBack() {
element.all(by.css('a[href*="#"]')).get(0).click();
}

/**
* Simulate Pressing the enter key
*/
function pressEnter(){
  browser.actions().sendKeys(protractor.Key.ENTER).perform();
}

/**
* Wait for an element to be clickable
*/
function waitFor(el) {
var EC = protractor.ExpectedConditions;
browser.wait(EC.elementToBeClickable(el), 5000, 'Element taking too long to appear in the DOM');
}


//Test for title
describe('Test A', function() {
  it('Review The title', function() {
    //adjust height/width for mobile testing
    var width = 360;
    var height = 700;
    browser.driver.manage().window().setSize(width, height);
    browser.get('http://localhost:8080/solutions/svyMobile/index.html?f=main');
    //check title
    expect(browser.getTitle()).toEqual('svyMobile - main - Servoy NG Client');
  });
});


//Test App
describe('Test B', function() {
  it('Fill in input and validate', function() {              

    browser.get('http://localhost:8080/solutions/svyMobile/index.html?f=main');
    
    //find button run and click it    
    var startBtn = element(by.buttonText("VIEW EXAMPLES"))    
    waitFor(startBtn);    
    startBtn.click();    

    //identify all the buttons on examples screen;
    var tablesBtn = element(by.name('tables'));  
    // open up tables example    
    waitFor(tablesBtn);    
    tablesBtn.click();            
    
    //enter some text to search
    var input = element(by.tagName('input'));
    waitFor(input);    
    input.sendKeys('Chai');     
    pressEnter();

    //see if Chai item has been filtered
    var tf = element(by.xpath('//div[contains(text(), "Chai")]'));    
    expect(tf.getText()).toEqual('Chai');    
    
    // leave tables view
    goBack();
    waitFor(tablesBtn);    

    // open up tables example again
    tablesBtn.click();            
    //clear search
    waitFor(input);    
    input.clear(); 
    pressEnter();    

    goBack();
    waitFor(tablesBtn);    

    //wait a second...
    browser.pause();
    browser.pause();
    browser.pause();
    
  });
});