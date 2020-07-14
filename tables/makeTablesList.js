function pdfDrawTable(doc,baseline,col,rowSkip,charWidth,i)
{
    for(let j=1;j<=10;++j)
    {
        const row = baseline + rowSkip*j;
        doc.text(i.toString(),col+2*charWidth,row,{align:"right"});
        doc.text(" x ",col+5*charWidth,row,{align:"right"});
        doc.text(j.toString(),col+7.5*charWidth,row,{align:"right"});
        doc.text(" = ",col+10.5*charWidth,row,{align:"right"});
        doc.text((i*j).toString(),col+13.5*charWidth,row,{align:"right"});
    }
}

function makeTablesListPdf()
{
    let doc = new jsPDF();

    const fontSize = 12;
    doc.setFontSize(fontSize);
    
    const charWidth = fontSize/6;
    const rowSkip = charWidth*2.5;
    const colSkip = charWidth*25; 

    const topMargin = 20;
    const leftMargin = 20;
    
    for(let i=1;i<=3;++i)
    {
        const baseline = topMargin;
        const col = topMargin + colSkip*(i-1);
        pdfDrawTable(doc,baseline,col,rowSkip,charWidth,i);
    }

    for(let i=4;i<=6;++i)
    {
        const baseline = topMargin + rowSkip*12;
        const col = topMargin + colSkip*(i-4);
        pdfDrawTable(doc,baseline,col,rowSkip,charWidth,i);
    }

    for(let i=7;i<=9;++i)
    {
        const baseline = topMargin + rowSkip*24;
        const col = topMargin + colSkip*(i-7);
        pdfDrawTable(doc,baseline,col,rowSkip,charWidth,i);
    }

    doc.save("tables_list.pdf");
}
