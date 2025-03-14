// button1 

document.getElementById('cmp-btn').addEventListener('click',
    function (){
        alert("Board Updated Successfully");
        const outPutDiv = document.getElementById('activityMessage');
        outPutDiv.innerText = "You have Completed the task Fix Mobile Button issue at 1:26:53 AM";
        const button1 = document.getElementById('cmp-btn')
        button1.disabled = true;
        const taskAssigned = document.getElementById('taskCount');
        taskAssigned.innerText = '5';
        const rightSide = document.getElementById('navbarCounter');
        rightSide.innerText = '24';
    }
)
//button 2 

document.getElementById('cmp-btn2').addEventListener('click',
    function (){
        
        alert("Board Updated Successfully ");
        const outPutDiv = document.getElementById('activityMessage');
        outPutDiv.innerText = "You Have Completed the task Add Dark Mode at 1:27:56 AM";
        const button2 = document.getElementById('cmp-btn2');
        button2.disabled = true;
        const taskAssigned = document.getElementById('taskCount');
        taskAssigned.innerText = '4';
        const rightSide = document.getElementById('navbarCounter');
        rightSide.innerText = '25';
    }
)
//button 3 

document.getElementById('cmp-btn3').addEventListener('click',
    function (){
        alert("Board Updated Successfully"); 
        const outPutDiv = document.getElementById('activityMessage');
        outPutDiv.innerText = "You Have Completed the task Optimize Home page at 1:28:56 AM";
        const button3 = document.getElementById('cmp-btn3');
        button3.disabled = true;
        const taskAssigned = document.getElementById('taskCount');
        taskAssigned.innerText = '3';
        const rightSide = document.getElementById('navbarCounter');
        rightSide.innerText = '26';
    }
)
//button 4

document.getElementById('cmp-btn4').addEventListener('click',
    function (){
        alert("Board Updated Successfully");
        const outPutDiv = document.getElementById('activityMessage');
        outPutDiv.innerText = "You Have Completed the task Add new emoji at 1:29:56 AM";
        const button4 = document.getElementById('cmp-btn4');
        button4.disabled = true;
        const taskAssigned = document.getElementById('taskCount');
        taskAssigned.innerText = '2';
        const rightSide = document.getElementById('navbarCounter');
        rightSide.innerText = '27';
    }
)
//button 5

document.getElementById('cmp-btn5').addEventListener('click',
    function (){
        alert("Board Updated Successfully");
        const outPutDiv = document.getElementById('activityMessage');
        outPutDiv.innerText = "You Have Completed the task Integrate OpenAI API at 1:30:56 AM";
        const button5 = document.getElementById('cmp-btn5');
        button5.disabled = true;
        const taskAssigned = document.getElementById('taskCount');
        taskAssigned.innerText = '1';
        const rightSide = document.getElementById('navbarCounter');
        rightSide.innerText = '28';
    }
)
//button 6

document.getElementById('cmp-btn6').addEventListener('click',
    function (){
        alert("Board Updated Successfully");
        const outPutDiv = document.getElementById('activityMessage');
        outPutDiv.innerText = "You Have Completed the task Improve Job searching at 1:31:56 AM";
        const button6 = document.getElementById('cmp-btn6');
        button6.disabled = true;
        const taskAssigned = document.getElementById('taskCount');
        taskAssigned.innerText = '0';
        const rightSide = document.getElementById('navbarCounter');
        rightSide.innerText = '29';
    }
)


document.getElementById('discover-btn').addEventListener("click",
    function(){
        window.location.href="./main.html"
    }

    
)

