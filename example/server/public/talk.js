
    var speech = SpeechToText;
    var activeSTT;

    function stopListening() {
        if (activeSTT) {
            activeSTT.stop();
            activeSTT = null;
        }
    }
    function listen(idVal) {
        speech.listen({
            onStart: function() {
                console.log('starting');
            },
            onResult: function(e) {
                console.log(e.text);
                console.log(idVal);
                $(idVal).val(e.text);
                if (e.isFinal) {
                    stopListening();
                }
            },
            onError: function(e) {
                console.log('error', e);
            },
            onEnd: function(e) {
                console.log('end', e);
                stopListening();
            }
        });
    }

    function micListerner(buttonID, inputID) {
        $(buttonID).click(function () { //button ID would be passed here
            if (speech.isSupported) {
                listen(inputID);
                
            } else {
                alert('speech not supported by this browser');
         }
            return false;
        });
    }

micListerner('#PetIdButton', '#petIdInput');
micListerner('#FirstNameButton', '#firstNameInput');
micListerner('#AnimalTypeButton', '#animalTypeInput');
micListerner('#BreedButton', '#breedInput');
micListerner('#ColorButton', '#colorInput');
micListerner('#GenderButton', '#genderInput');
micListerner('#AgeButton', '#ageInput');
micListerner('#VaccinationButton', '#vaccinationInput');
micListerner('#DescriptionButton', '#descriptionInput');

var stop = function(){
    $('#End').click(function() {
        return false;
    });
}
stop();


