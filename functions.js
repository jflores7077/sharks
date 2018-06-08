function LoadQuiz(a){
    var quizIndex = 0;
    for(var i in a){
        var quizCard = $(document.createElement('div'));
        $(quizCard).addClass('cardQuiz');
        $(quizCard).attr('id', 'card'+index);
        
        var question = $(document.createElement('div'));
        $(question).addClass('quizQuestion');
        
        var choices = $(document.createElement('div'));
        $(choices).addClass('quizOptions');
        for(var j in a[i]){
            if(j=='question'){
                var build = '';
                build+='<h5>'
                build+=a[i][j];
                build+='</h5>'
                quizIndex++;
                $(question).html(build);
            }
            if(j=='answer'){
                correctAnswers.push(a[i][j]);
                var ans = a[i][j].replace(/\s/g, '_');
                $(quizCard).attr('id', ans)
            }

            if(j=='a'||j=='b'||j=='c'||j=='d'){
                var choice = $(document.createElement('div'));
                var choiceTXT = $(document.createElement('p'));
                
                $(choice).addClass('choiceQuiz');
                $(choice).addClass('unselected');
                $(choiceTXT).text(a[i][j]);

                $(choice).append(choiceTXT)
                $(choices).append(choice)
            }

        }

        $(quizCard).append(question);
        $(quizCard).append(choices)
        if(index%3 == 0){
            curRow++;
            var row = $(document.createElement('div'));
            $(row).addClass('row');
            $(row).attr('id', 'r'+curRow)
            $('#quiz').append(row)

        }
        $('#r'+curRow).append(quizCard)
        index++;

    }
    var check = $(document.createElement('div'));
    var button = $(document.createElement('button'));
    var info = $(document.createElement('div'));
    var infoTxt = $(document.createElement('div'));
    $(info).attr('id','infoDiv');
    $(infoTxt).attr('id','infoQuiz')

    $(info).append(infoTxt);
    $(button).text('Check Answers');
    $(button).attr('id','checkQuiz')
    $(check).append(button)
    $('#quiz').append(check);
    $('#quiz').append(info);
}

function selectAnswer(a){
    alert(a);
    $(a).toggleClass('selected');
};

function fixNav(a,b){
    var cuScroll = $(a).scrollTop();
    var nav = $('.NavSelected');
    var navTop = $('.NavSelected').offset().top
    console.log(navTop)
    var navHeight = $('.NavSelected').outerHeight(true)
    var placeholdBar = $('#navbarPlace');
    console.log(cuScroll)
    if(cuScroll >= b){
        $('.STnav').css('position','fixed');
        $('.STnav').css('width','100%');
        
        $('#body').css('margin-top','8vh')
        //$(placeholdBar).toggleClass('showBar');
        //$(placeholdBar).toggleClass('hideBar');
    }
    if(cuScroll < b ){
        $('#body').css('margin-top','0vh')
        $('.STnav').css('position','relative')
        console.log('s')
        
    }
    
}