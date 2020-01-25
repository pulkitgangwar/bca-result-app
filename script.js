const { data } = JSON.parse(localStorage.getItem("data"));
const resultContainer = document.querySelector(".result");

console.log(data);

function showData() {
  const topDataToDisplay = `
    <div class="result__data">
    <h3 class="result__data--child result__data--name">
      Name: <span class="result__span">${data.name}</span>
    </h3>
    <h3 class="result__data--child result__data--fatherName">Father's name: <span class="result__span">${data.fathersName}</span></h3>
    <h3 class="result__data--child result__data--motherName">Mother's name: <span class="result__span">${data.mothersName}</span></h3>
    <h3 class="result__data--child result__data--rollNo">Roll Number: <span class="result__span">${data.rollNumber}</span></h3>
  </div>
    `;

  const tableIndex = `
    <div class="result__subject">
    <div class="result__subject--child result__subject--name  result__subject--index">Name</div>
    <div class="result__subject--child result__subject--internalMarks result__subject--index">Internal Marks</div>
    <div class="result__subject--child result__subject--externalMarks result__subject--index">External Marks</div>
    <div class="result__subject--child result__subject--totalMarks result__subject--index">Total Marks</div>

       
      </div>
    `;

  const subjectAndMarksContent = data.subjects
    .map(
      subject => `
        <div class="result__subject--child result__subject--name"><span class="result__span">${subject.name}</span></div>
        <div class="result__subject--child result__subject--internalMarks"><span class="result__span">${subject.internal}</span></div>
        <div class="result__subject--child result__subject--externalMarks"><span class="result__span">${subject.external}</span></div>
        <div class="result__subject--child result__subject--totalMarks"><span class="result__span">${subject.total}</span></div>
        `
    )
    .join("");

  resultContainer.insertAdjacentHTML("beforeend", topDataToDisplay);
  resultContainer.insertAdjacentHTML("beforeend", tableIndex);
  grabSubjectGridContainer(subjectAndMarksContent);
}

showData();

function grabSubjectGridContainer(content) {
  const resultSubject = document.querySelector(".result__subject");
  resultSubject.insertAdjacentHTML("beforeend", content);
}
