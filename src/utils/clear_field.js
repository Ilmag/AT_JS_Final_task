const clearField = async (element) => {
    try {
        const value = await element.getValue();
        const backspaces = new Array(value.length).fill('Backspace');
        await element.click();
        await browser.keys(backspaces);
    }catch(error){
        console.log(`Failed to clean: filed ${error}`)
    }
}

module.exports = clearField;