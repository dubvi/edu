function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
//got from MDN;

function makeChallengePdf(max)
{
    let doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    const nCols = 4;
    
    const topMargin = 20;
    const bottomMargin = topMargin;
    const leftMargin = 20;
    const rightMargin = leftMargin;
    
    const boxWidth  = pageWidth - leftMargin - rightMargin;
    const boxHeight = pageHeight - topMargin - bottomMargin;

    //calculate fontSize to fit in the box;
    const nCharPerItem = 2+3+2+3+10;//=20
    const charWidth = Math.floor(boxWidth/(nCols*nCharPerItem));
    const fontSize = charWidth*6;
    doc.setFontSize(fontSize);
    const rowSkip = charWidth*2.5;
    const colSkip = charWidth*nCharPerItem;
    const nRows = Math.floor(boxHeight/rowSkip);
    
    for(let i=0;i<nRows;++i)
    {    
        const row = topMargin + i*rowSkip;

        for(let j=0;j<nCols;++j) 
        {
            const col = leftMargin + j*colSkip;

            const x = getRandomIntInclusive(1,max);
            const y = getRandomIntInclusive(1,max);

            doc.text(x.toString(),col+2*charWidth,row,{align:"right"});
            doc.text(" x ",col+5*charWidth,row,{align:"right"});
            doc.text(y.toString(),col+7*charWidth,row,{align:"right"});
            doc.text(" = ",col+10*charWidth,row,{align:"right"});
        }
    }
    const filename = "tables_challenge_" + Date.now() + ".pdf";
    doc.save(filename);
}
