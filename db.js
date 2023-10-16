document.getElementById("parseButton").addEventListener("click", function(){
    const fileInput = document.getElementById("csvFile")
    const dateInput = document.getElementById("dateSelect")
    const file = fileInput.files[0]
    console.log(dateInput.value)
    const date = dateInput.value
    if(file){
        const reader = new FileReader()
        reader.onload = function(e){
            const contents = e.target.result
            parseCSV(contents, date)
        }
        reader.readAsText(file)
    }
})

function parseCSV(csv, date){
    const table = document.getElementById("table")
    table.innerHTML = ''
    let allVerses = 0
    const lines = csv.split('\n')
    for (let i = 0; i < lines.length; i++){
        const row = document.createElement("tr")
        const cells = lines[i].split(",")
        const verses = getVerses()
        for (let verse of verses){
            console.log(verse)
        }
        for (let j = 0; j<cells.length; j++){
            const cell = i === 0 ? document.createElement("th") : document.createElement("td")
            cell.textContent = ""
            if (date == cells[j]){
                let versesRead = getVersesRead(verses,cells)
                let verseTotal = getVerseTotal(verses)
                console.log(versesRead + "VersesRead")
                    if (hasACheck(cells) == true){
                        console.log(verseTotal)
                        cell.textContent = (cells[0] + " " + verseTotal + " " + "Check")
                        allVerses = allVerses + verseTotal
                        cell.classList.add("red-cell")
                        row.appendChild(cell)
                    }
                    else {
                        console.log(versesRead)
                        allVerses = allVerses + versesRead
                        cell.textContent = (cells[0] + " " + versesRead)
                        row.appendChild(cell)
                    }
            }
            else {
                row.appendChild(cell)
            }

        }
        table.appendChild(row)
        if (lines[i + 1] == null){
            const endCell = document.createElement("td")
            endCell.textContent = allVerses  + ": is the total number of verses for this week"
            row.appendChild(endCell)
            table.appendChild(row)
        }
    }
}

function getVerses(){

    vA = []
    vA.push(document.getElementById("day1").value)
    vA.push(document.getElementById("day2").value)
    vA.push(document.getElementById("day3").value)
    vA.push(document.getElementById("day4").value)
    vA.push(document.getElementById("day5").value)
    vA.push(document.getElementById("day6").value)
    vA.push(document.getElementById("day7").value)
    return vA
}

function getVerseTotal(arr){
    var verseTotal = 0; 
    for (var v of arr){
        verseTotal = parseInt(v) + verseTotal
    }
    return verseTotal
}

function getVersesRead(verses, cells){
    var versesRead = 0
    for (let b = 0; b < cells.length;b++){
        if (cells[b] == 'Thursday' || cells[b] == '"Thursday"' || cells[b] == '"Thursday' || cells[b] == 'Thursday"'){
            versesRead += parseInt(verses[0])
            console.log("check1")
        }
        else if (cells[b] == 'Friday' || cells[b] == '"Friday"' || cells[b] == '"Friday' || cells[b] == 'Friday"'){
            versesRead += parseInt(verses[1])
            console.log("check2")
        }
        else if (cells[b] == 'Saturday' || cells[b] == '"Saturday"' || cells[b] == '"Saturday' || cells[b] == 'Saturday"'){
            versesRead += parseInt(verses[2])
            console.log("check3")
        }
        else if (cells[b] == 'Sunday' || cells[b] == '"Sunday"' || cells[b] == '"Sunday' || cells[b] == 'Sunday"'){
            versesRead += parseInt(verses[3])
            console.log("check4")
        }
        else if (cells[b] == 'Monday' || cells[b] == '"Monday"' || cells[b] == '"Monday' || cells[b] == 'Monday"'){
            versesRead += parseInt(verses[4])
            console.log("check5")
        }
        else if (cells[b] == 'Tuesday' || cells[b] == '"Tuesday"' || cells[b] == '"Tuesday' || cells[b] == 'Tuesday"'){
            versesRead += parseInt(verses[5])
            console.log("check6")
        }
        else if (cells[b] == 'Wednesday' || cells[b] == '"Wednesday"' || cells[b] == '"Wednesday' || cells[b] == 'Wednesday"'){
            versesRead += parseInt(verses[6])
            console.log("check7")
        }
        else {
            console.log("failed")
        }
        console.log("cells search" + cells[b])
    }
    console.log(versesRead +"versesReadFinished"+ cells[0])
    return versesRead

}

function hasACheck(cells){
    var hasTrue = false
    for (let i = 0; i<cells.length;i++){
        if (cells[i] == "checked"){
            hasTrue = true
        }
    }
    return hasTrue
}

    
