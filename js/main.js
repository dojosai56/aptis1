/** Responsive Navbar **/

function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
                x.className += " responsive";
        } else {
                x.className = "topnav";
        }
}

/** Smooth Scrolling**/
$(document).on("click", 'a[href^="#"]', function (event) {
        event.preventDefault();
        $("html, body").animate(
                {
                        scrollTop: $($.attr(this, "href")).offset().top,
                },
                500
        );
});

/** Main Diagnostic Quiz Function **/

(function () {
        var questions = [

                {
                        //grammar section 25 questions
                        //vocabulary section 25 questions
                        //
                        //1 of 25 - grammar section (1)
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "The man ______ came to the park today to play football was wearing a black cap.",
                        choices: ["A) who",
                                "B) there",
                                "C) which"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_question1.png",
                        explanation: "Since the subject is a human being ('The man'), the correct relative pronoun is 'A) who'."
                },
                {

                        //2
                        //
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "Speaker 1: I just ran a marathon.  Speaker 2: You ______ have ran one as you're not even winded.",
                        choices: ["A) can't",
                                "B) shouldn't",
                                "C) needn't"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The correct sentence is as follows: 'You can't have ran one as you're not even winded'.  Hence, the correct answer is 'A) can't'.  The reason is that it makes grammatical and logical sense."
                },
                {

                        //3
                        //
                        //b1
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "She believes in herself tremendously, yet she works harder ______ anyone I know.",
                        choices: ["A) then",
                                "B) than",
                                "C) the"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The word 'than' is comparative and correctly completes the phrase '...she works harder than anyone I know'.  The word 'then' is sequential and the word 'the' is an article that doesn't make sense grammatically in the blank space.  Hence, 'B) than' is the correct answer."
                },
                {

                        //4
                        //
                        //c2
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "She drives her children ______ work every day.",
                        choices: ["A) in",
                                "B) at",
                                "C) to"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q2-25.png",
                        explanation: "'Her' children are probably adults or are of working age since 'She' is driving her kids to work every day.  Hence, the correct answer is: 'C) to'.  The word 'at' makes sense, but still sounds odd.  It makes clear and logical sense to have the completed sentence be: 'She drives her children to work every day'."
                },
                {

                        //5
                        //
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "He'll set ______ the appointment for later this week.",
                        choices: ["A) up",
                                "B) on",
                                "C) in"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The common phrase is 'set up an appointment' or 'set up the appointment'.  Hence, the correct answer is: 'A) up'."
                },
                {

                        //6
                        //
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "I can call you when I ______ back from the store.",
                        choices: ["A) get",
                                "B) gets",
                                "C) getting"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "'Get' is the correct form of the verb as it follows the subject 'I' in the present tense.  'I get' is a complete and correct first-person singular subject-verb phrase while 'gets' would be used with third-person singular ('he', 'she', 'it') and therefore would be incorrect."
                },
                {

                        //7
                        //
                        //b1
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "We went to the library and ______ we went to the park.",
                        choices: ["A) than",
                                "B) then",
                                "C) so"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        xplanation: "The word 'then' is used to indicate a sequence of events in time.  In this case, the word 'then' is used to connect the group's trip to the library and 'then' their trip to the park afterwards.  Hence, the correct answer is: 'B) then'."
                },
                {

                        //8
                        //
                        //b1
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "They have ______ at that hotel many times this summer.",
                        choices: ["A) stay",
                                "B) stayed",
                                "C) staying"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The word 'stayed' is the past participle of the verb 'stay'.  It is used in the present perfect tense ('have stayed') to indicate an event that has occurred at least once in the past and implies that the event may (or may not) continue in the future.  Hence, the correct answer is: 'B) stayed'."
                },
                {

                        //9
                        //
                        //c2
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "______ they missed their flight, they missed the wedding altogether.",
                        choices: ["A) Then",
                                "B) Though",
                                "C) Since"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q2-25.png",
                        explanation: "'Since' is used to indicate a cause or reason.  In this sentence, it implies that because they missed their flight (the cause), they missed the wedding (the effect).  'Since' is used to show that the missed flight directly led to the missed wedding.  Hence, the correct answer is: 'C) Since'."
                },
                {
                        //10
                        //b1
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "Food ______ to be much cheaper just a few years ago.",
                        choices: ["A) use",
                                "B) used",
                                "C) was"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The phrase 'used to' is a phrase that refers to something that was true in the past, but is no longer the case.  In this sentence, 'Food used to be much cheaper...' indicates that food was cheaper in the past (and it's obviously more expensive now).  Hence, the correct answer is: 'B) used'."
                },
                {
                        //11
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "They were not sure what the best strategy ______ to study for the exam.",
                        choices: ["A) was",
                                "B) were",
                                "C) when"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The sentence refers to 'the best strategy', which features the singular noun 'strategy'.  Therefore, 'A) was' is the correct answer since it agrees with the singular subject 'strategy'."
                },
                {
                        //12
                        //c2
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "______ they want to come over today?",
                        choices: ["A) Hadn't",
                                "B) Haven't",
                                "C) Didn't"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The correct answer is 'Didn't' because if you move the words around, the incorrect phrases would be 'They hadn't want to come over today' or 'They haven't want to come over today'.  Instead, the correct declarative statement with the words of the question reordered is: 'They didn't want to come over today.'  Hence, the correct answer is: 'C) Didn't'."
                },
                {
                        //13
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "Why ______ you apply for that job we saw the ad for yesterday?",
                        choices: ["A) don't",
                                "B) haven't",
                                "C) aren't"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The phrases 'Why haven't you apply…?' and 'Why aren't you apply…?' don't make grammatical sense.  It should be 'Why haven't you applied…?' or 'Why aren't you applying…?'  The correct complete sentence is 'Why don't you apply for that job we saw the ad for yesterday?'  Hence, the correct answer is: 'A) don't'."
                },
                {
                        //14
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "I saved three-______ dollars ($300) over the last few months.",
                        choices: ["A) hundred",
                                "B) zero-zero",
                                "C) hundreds"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "When specifying an exact amount of money like '$300,' 'hundred' is correct for exact amounts.  'Zero-zero' is not a proper way to refer to numerical amounts.  The word 'hundreds' is used for approximate figures (e.g. 'hundreds of dollars'), but is not used for exact amounts like '$300'."
                },
                {
                        //15
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "If he ______ been driving so fast, he wouldn't have gotten issued a speeding ticket.",
                        choices: ["A) hadn't",
                                "B) haven't",
                                "C) isn't"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The answer choice 'A) hadn't' works here because the sentence talks about something that already happened in the past ('wouldn't have gotten…a ticket') and imagines how it could have been avoided.  The word 'haven't' is wrong because it refers to the present tense.  The word 'isn't' is also wrong because it refers to the present tense."

                },
                {
                        //16
                        //c2
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "I ______ a fun story today. I am half-way done with it.",
                        choices: ["A) wrote",
                                "B) writing",
                                "C) was writing"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The answer choice 'C) was writing' is correct because it describes an action or event that started in the past and may be resumed in the future ('I am half-way done with it.').  The word 'wrote' is wrong because it suggests the story is already finished (the event started and ended in the past) while the word 'writing' is wrong because it doesn’t make grammatical sense."
                },
                {
                        //17
                        //b1
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "He doesn't like to try ______ clothes before buying them because he doesn't like to spend time shopping.",
                        choices: ["A) in",
                                "B) on",
                                "C) over"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The phrase 'try on clothes' is the correct phrasal verb used when referring to testing clothes for fit before buying them.  The phrases 'try in clothes' and 'try over clothes' are incorrect as they aren't phrases that make sense in common everyday English."
                },
                {
                        //18
                        //b1
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "My instructor _____ the class if we felt ready for the test on Friday.",
                        choices: ["A) ask",
                                "B) asked",
                                "C) told"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The past tense verb 'asked' is correct here because the sentence describes something the instructor did in the past and makes clear logical and grammatical sense.  The word 'ask' is present tense and doesn’t make grammatical sense while 'told' would have made sense if the sentence were something like: 'My instructor told the class that we should feel ready for the test on Friday since we all did well on the Practice Test.'  Hence, the correct answer choice is: 'B) asked'."
                },
                {
                        //19
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "My twin brother and I both might ______ Engineering at university.",
                        choices: ["A) study",
                                "B) studying",
                                "C) to study"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The main verb 'study' is correct after the modal verb 'might'.  The word 'studying' is incorrect because it is a present participle ('might' does not pair with present participles) and 'to study' is incorrect because 'might' does not pair with the infinitive form."
                },
                {
                        //20
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "The Registrar ______ allow me to drop the class since it's after the Class Drop Deadline.",
                        choices: ["A) won't",
                                "B) weren't",
                                "C) aren't"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The contraction 'won't' ('will not') is correct here as the correct sentence will read: 'The Registrar won't allow me to drop the class since it's after the Class Drop Deadline'.  The other options are incorrect because 'weren't' (past plural form of 'wasn't') and 'aren't' (present plural form of 'isn't') do not make logical or grammatical sense.  Hence, the correct answer is 'A) won't'."
                },
                {
                        //21
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "They ______ work in the same department, but they do now.",
                        choices: ["A) didn't use to",
                                "B) didn't used to",
                                "C) won't use to"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The phrase 'didn't use to' correctly expresses a past habit or state that no longer exists.  The phrase 'didn't used to' is incorrect because it's an incorrect spelling of the phrase.  However, the phrase 'used to' is correct ('Food used to be…cheaper…').  The phrase 'won't use to' is grammatically incorrect and should never be used.  Hence, the correct answer is: 'A) didn't use to'."
                },
                {
                        //22
                        //b1
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "The dogs ______ barking incessantly throughout the night.",
                        choices: ["A) been",
                                "B) have been",
                                "C) will have been"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The phrase 'have been' is used to describe an action that started in the past and continues up to the present which fits the context of the dogs barking throughout the night (and assumes that it is still nighttime currently).  The word 'been' is incomplete and cannot stand alone without an auxiliary verb.  The phrase 'will have been' refers to a future perfect continuous action and is not suitable for describing something that has already happened.  Hence, the correct answer is: 'have been'."

                },
                {
                        //23
                        //b1
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "My Mother ______ sending me to school with a nutritious lunch until I started buying my lunch at the cafeteria instead.",
                        choices: ["A) been",
                                "B) had been",
                                "C) has been"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The correct phrase is 'had been' which is used to describe an action that was happening in the past before something else interrupted that action ('until I started buying my lunch…').  In this case, the action of the speaker's 'Mother' sending the speaker to school with a nutritious lunch occurred before the speaker started buying lunch at the cafeteria.  The answer choice 'A) been' is grammatically incorrect.  If the clause starting with 'until' wasn't a part of the sentence, then 'has been' would be correct: 'My Mother has been sending me to school with a nutritious lunch.'  However, the correct answer choice is 'B) had been' for this specific sentence and the entire correct sentence reads: 'My Mother had been sending me to school with a nutritious lunch until I started buying my lunch at the cafeteria instead'."
                },
                {
                        //24
                        //a0
                        //6 characters per space
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "My grandfather, ______ is a doctor, wants me to follow in his professional footsteps, but I don't like school that much.",
                        choices: ["A) who",
                                "B) that",
                                "C) where"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The correct word is 'who', which is used to refer to people.  In this sentence, 'who' introduces the relative clause that provides more information about the grandfather.  The word 'that' can sometimes be used for people, but it is less common in this context, and 'where' is used for places, not people.  The correct sentence is: 'My grandfather, who is a doctor, wants me to follow in his professional footsteps, but I don't like school that much'.  Hence, the correct answer is: 'who'."
                },
                {
                        //25
                        //
                        //6 characters per space b1
                        qType: "Grammar - 25 Questions - 12 minutes",
                        question: "There ______ a 7.0 earthquake that struck the tiny country in 2019 right before Covid.",
                        choices: ["A) is",
                                "B) was",
                                "C) had"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q2-25.png",
                        explanation: "The correct word is 'was' as the sentence refers to an event that occurred in the past ('struck the tiny country').  The word 'is' refers to present events and 'had' is used in the past perfect tense, which is unnecessary here since the word 'struck' is in the simple past tense.  The correct sentence is: 'There ___ a 7.0 earthquake that struck the tiny country in 2019 right before Covid'.  Hence, the correct answer is: 'B) was'."
                },
                {
                        //26
                        //index3 - leave
                        //
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "depart",
                        choices: ["connect",
                                "run",
                                "verify",
                                "leave",
                                "behave",
                                "join",
                                "hint at",
                                "reject",
                                "occur",
                                "believe"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q26-30.png",
                        explanation: "The words 'depart' and 'leave' both mean to go away from a place or to set off on a journey."
                },
                {
                        //27
                        //
                        //index0 - connect
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "attach",
                        choices: ["connect",
                                "run",
                                "verify",
                                "leave",
                                "behave",
                                "join",
                                "hint at",
                                "reject",
                                "occur",
                                "believe"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q26-30.png",
                        explanation: "The words 'connect' and 'attach' both emphasize the creation of a link or relationship between two things."
                },
                {
                        //28
                        //
                        //index2 - verify
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "confirm",
                        choices: ["connect",
                                "run",
                                "verify",
                                "leave",
                                "behave",
                                "join",
                                "hint at",
                                "reject",
                                "occur",
                                "believe"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q26-30.png",
                        explanation: "The word 'confirm' means to establish something as true or correct, which aligns closely with 'verify', also meaning to check or prove that something is true."
                },
                {
                        //29
                        //
                        //index6 - hint at
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "imply",
                        choices: ["connect",
                                "run",
                                "verify",
                                "leave",
                                "behave",
                                "join",
                                "hint at",
                                "reject",
                                "occur",
                                "believe"
                        ],
                        correctAnswer: 6,
                        image: "img/aptis1_q26-30.png",
                        explanation: "The word 'imply' means to suggest something indirectly, which matches 'hint at' as both involve subtle suggestions rather than direct statements."

                },
                {
                        //30
                        //
                        //index8-occur
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "happen",
                        choices: ["connect",
                                "run",
                                "verify",
                                "leave",
                                "behave",
                                "join",
                                "hint at",
                                "reject",
                                "occur",
                                "believe"
                        ],
                        correctAnswer: 8,
                        image: "img/aptis1_q26-30.png",
                        explanation: "The word 'happen' refers to an event taking place, which is synonymous with 'occur', which has the same meaning."

                },
                {
                        //31
                        //
                        //b1 - help
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "To defend someone is to...",
                        choices: ["A) walk",
                                "B) help",
                                "C) determine",
                                "D) cherish",
                                "E) share",
                                "F) discover",
                                "G) deliver",
                                "H) presume",
                                "I) play",
                                "J) convict",
                                "K) get"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q31-35.png",
                        explanation: "To 'defend' someone means to protect or support him/her, which aligns with the idea of 'helping' him/her in a situation.  Hence, the correct answer is: 'B) help'."

                },
                {
                        //32
                        //
                        //f5 - discover
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "To find someone is to...",
                        choices: ["A) walk",
                                "B) help",
                                "C) determine",
                                "D) cherish",
                                "E) share",
                                "F) discover",
                                "G) deliver",
                                "H) presume",
                                "I) play",
                                "J) convict",
                                "K) get"
                        ],
                        correctAnswer: 5,
                        image: "img/aptis1_q31-35.png",
                        explanation: "The phrase 'To find someone' involves locating a person who is lost, which is synonymous with the word 'discover'.  Hence, the correct answer is: 'F) discover'."

                },
                {
                        //33
                        //
                        //index7h - presume
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "To believe in something is to...",
                        choices: ["A) walk",
                                "B) help",
                                "C) determine",
                                "D) cherish",
                                "E) share",
                                "F) discover",
                                "G) deliver",
                                "H) presume",
                                "I) play",
                                "J) convict",
                                "K) get"
                        ],
                        correctAnswer: 7,
                        image: "img/aptis1_q31-35.png",
                        explanation: "The phrase 'To believe in something' often involves accepting something as true or likely, which relates to 'presume', meaning to suppose something is true without proof.  Hence, the correct answer is: 'H) presume'."

                },
                {
                        //34
                        //
                        //index10k - get
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "To receive something...",
                        choices: ["A) walk",
                                "B) help",
                                "C) determine",
                                "D) cherish",
                                "E) share",
                                "F) discover",
                                "G) deliver",
                                "H) presume",
                                "I) play",
                                "J) convict",
                                "K) get"
                        ],
                        correctAnswer: 10,
                        image: "img/aptis1_q31-35.png",
                        explanation: "The phrase 'To receive something' means to take or acquire something, which directly aligns with the word 'get'.  Hnece, the correct answer is: 'K) get'."

                },
                {
                        //35
                        //indexd3 cherish
                        //
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "To love someone...",
                        choices: ["A) walk",
                                "B) help",
                                "C) determine",
                                "D) cherish",
                                "E) share",
                                "F) discover",
                                "G) deliver",
                                "H) presume",
                                "I) play",
                                "J) convict",
                                "K) get"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q31-35.png",
                        explanation: "The phrase 'To love someone' involves holding a person dear and valuing him/her greatly, which matches the meaning of 'cherish'.  Hence, the correct answer is: 'D) cherish'."

                },
                {
                        //36
                        //
                        //index d 3 jagged
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Having a non-flat, rocky surface",
                        choices: ["A) plain",
                                "B) fashionable",
                                "C) intensive",
                                "D) jagged",
                                "E) well-worn",
                                "F) fussy",
                                "G) native",
                                "H) complacent",
                                "I) silly",
                                "J) composed",
                                "K) ambitious"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q36-40.png",
                        explanation: "The word 'jagged' describes something with a rough, uneven, or irregular surface, which fits the description of 'Having a non-flat, rocky surface'.  Hence, the correct answer is: 'D) jagged'."

                },
                {
                        //37
                        //
                        //index 6 g native
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Natural or real",
                        choices: ["A) plain",
                                "B) fashionable",
                                "C) intensive",
                                "D) jagged",
                                "E) well-worn",
                                "F) fussy",
                                "G) native",
                                "H) complacent",
                                "I) silly",
                                "J) composed",
                                "K) ambitious"
                        ],
                        correctAnswer: 6,
                        image: "img/aptis1_q36-40.png",
                        explanation: "The word 'native' refers to something that is natural or originating in a particular place, especially in its original state.  This matches with 'Natural or real' and is the best answer choice for this question.  Hence, the correct answer is: 'G) native'."

                },
                {
                        //38
                        //
                        //index 5f fussy
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Difficult to please or make happy",
                        choices: ["A) plain",
                                "B) fashionable",
                                "C) intensive",
                                "D) jagged",
                                "E) well-worn",
                                "F) fussy",
                                "G) native",
                                "H) complacent",
                                "I) silly",
                                "J) composed",
                                "K) ambitious"
                        ],
                        correctAnswer: 5,
                        image: "img/aptis1_q36-40.png",
                        explanation: "The word 'fussy' describes someone who is hard to satisfy or overly concerned with details, which is often linked to being 'Difficult to please or make happy'.  Hence, the correct answer for this question is: 'F) fussy'."

                },
                {
                        //39
                        //
                        //index j 9 composed
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Having a relaxed disposition",
                        choices: ["A) plain",
                                "B) fashionable",
                                "C) intensive",
                                "D) jagged",
                                "E) well-worn",
                                "F) fussy",
                                "G) native",
                                "H) complacent",
                                "I) silly",
                                "J) composed",
                                "K) ambitious"
                        ],
                        correctAnswer: 9,
                        image: "img/aptis1_q36-40.png",
                        explanation: "The word 'composed' refers to someone who is calm, collected, and relaxed, which fits the description of 'Having a relaxed disposition'.  Hence, the correct answer is: 'J) composed'."

                },
                {
                        //40
                        //
                        //index k 10 ambitious
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Wanting to succeed",
                        choices: ["A) plain",
                                "B) fashionable",
                                "C) intensive",
                                "D) jagged",
                                "E) well-worn",
                                "F) fussy",
                                "G) native",
                                "H) complacent",
                                "I) silly",
                                "J) composed",
                                "K) ambitious"
                        ],
                        correctAnswer: 10,
                        image: "img/aptis1_q36-40.png",
                        explanation: "The word 'ambitious' describes someone who has a strong desire to achieve success or attain goals.  This word matches with 'Wanting to succeed'.  Hence, the correct answer is: 'K) ambitious'."

                },
                {
                        //41
                        //
                        //index i 8 companion
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "He hardly went anywhere without a ______ by his side.",
                        choices: ["A) laws",
                                "B) beliefs",
                                "C) soccer",
                                "D) roof",
                                "E) instructions",
                                "F) examples",
                                "G) problems",
                                "H) monument",
                                "I) companion",
                                "J) setting",
                                "K) procedure"
                        ],
                        correctAnswer: 8,
                        image: "img/aptis1_q41-45.png",
                        explanation: "The word 'companion' refers to someone or something that accompanies 'him' when he leaves home and makes logical and grammatical sense.  The complete correct sentence is: 'He hardly went anywhere without a companion by his side'.  Hence, the correct answer is: 'I) companion'."

                },
                {
                        //42
                        //
                        //index f 5 examples
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "They are remarkable ______ of what to do under duress.",
                        choices: ["A) laws",
                                "B) beliefs",
                                "C) soccer",
                                "D) roof",
                                "E) instructions",
                                "F) examples",
                                "G) problems",
                                "H) monument",
                                "I) companion",
                                "J) setting",
                                "K) procedure"
                        ],
                        correctAnswer: 5,
                        image: "img/aptis1_q41-45.png",
                        explanation: "The word 'examples' fits the sentence as the full complete and correct sentence is as follows: 'They are remarkable examples of what to do under duress.'  The (presumable) people represent what are shrewd decisions to make when they are under duress.  There is no other plural answer choices that fit in this sentence ('laws', 'beliefs', 'instructions', 'problems').  Hence, the correct answer is: 'F) examples'."

                },
                {
                        //43
                        //
                        //index h monument 7
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "The ______ erected in his honor took a full year to complete.",
                        choices: ["A) laws",
                                "B) beliefs",
                                "C) soccer",
                                "D) roof",
                                "E) instructions",
                                "F) examples",
                                "G) problems",
                                "H) monument",
                                "I) companion",
                                "J) setting",
                                "K) procedure"
                        ],
                        correctAnswer: 7,
                        image: "img/aptis1_q41-45.png",
                        explanation: "The word 'monument' refers to a structure built to commemorate a person or event, fitting the context of being erected in someone’s honor.  Hence, the correct answer is: 'H) monument'."

                },
                {
                        //44
                        //
                        //index k procedure 10
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "The moment the dentist finished her ______ was the moment the patient started feeling better.",
                        choices: ["A) laws",
                                "B) beliefs",
                                "C) soccer",
                                "D) roof",
                                "E) instructions",
                                "F) examples",
                                "G) problems",
                                "H) monument",
                                "I) companion",
                                "J) setting",
                                "K) procedure"
                        ],
                        correctAnswer: 10,
                        image: "img/aptis1_q41-45.png",
                        explanation: "The word 'procedure' fits the context as it refers to a medical or dental operation or treatment that would relieve the patient’s discomfort.  Hence, the correct answer is: 'K) procedure'."

                },
                {
                        //45
                        //
                        //index b1 beliefs
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "What are the ______ of the sect that he belongs to?",
                        choices: ["A) laws",
                                "B) beliefs",
                                "C) soccer",
                                "D) roof",
                                "E) instructions",
                                "F) examples",
                                "G) problems",
                                "H) monument",
                                "I) companion",
                                "J) setting",
                                "K) procedure"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q41-45.png",
                        explanation: "The word 'beliefs' refers to the principles or doctrines of a group or sect, fitting the question about what defines their ideology.  Hence, the correct answer is: 'K) procedure'."

                },
                {
                        //46
                        //
                        //index d 3 horses
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Equestrian",
                        choices: ["A) difference",
                                "B) avoidance",
                                "C) reluctant",
                                "D) horses",
                                "E) constant",
                                "F) dogs",
                                "G) mixture",
                                "H) music",
                                "I) outlook",
                                "J) superb",
                                "K) acceptance"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q46-50.png",
                        explanation: "The word 'Equestrian' relates to horse riding or anything involving horses.  Hence, the correct answer is: 'D) horses'."

                },
                {
                        //47
                        //
                        //index a0 difference
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Contrast",
                        choices: ["A) difference",
                                "B) avoidance",
                                "C) reluctant",
                                "D) horses",
                                "E) constant",
                                "F) dogs",
                                "G) mixture",
                                "H) music",
                                "I) outlook",
                                "J) superb",
                                "K) acceptance"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q46-50.png",
                        explanation: "The word 'Contrast' refers to a comparison showing differences between two or more things.  Hence, the correct answer is: 'A) difference'."

                },
                {
                        //48
                        //
                        //index g mixture 6
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Variety",
                        choices: ["A) difference",
                                "B) avoidance",
                                "C) reluctant",
                                "D) horses",
                                "E) constant",
                                "F) dogs",
                                "G) mixture",
                                "H) music",
                                "I) outlook",
                                "J) superb",
                                "K) acceptance"
                        ],
                        correctAnswer: 6,
                        image: "img/aptis1_q46-50.png",
                        explanation: "The word 'Variety' is associated with a mix or collection of different items or types.  Hence, the correct answer is: 'G) mixture'."

                },
                {
                        //49
                        //
                        //index i outlook 8
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Perspective",
                        choices: ["A) difference",
                                "B) avoidance",
                                "C) reluctant",
                                "D) horses",
                                "E) constant",
                                "F) dogs",
                                "G) mixture",
                                "H) music",
                                "I) outlook",
                                "J) superb",
                                "K) acceptance"
                        ],
                        correctAnswer: 8,
                        image: "img/aptis1_q46-50.png",
                        explanation: "The word 'Perspective' refers to a point of view or way of looking at something, similar to the word 'outlook'.  Hence, the correct answer is: 'I) outlook'."

                },
                {
                        //50
                        //
                        //index b1 avoidance
                        qType: "Vocabulary - 25 Questions - 13 minutes",
                        question: "Boycott",
                        choices: ["A) difference",
                                "B) avoidance",
                                "C) reluctant",
                                "D) horses",
                                "E) constant",
                                "F) dogs",
                                "G) mixture",
                                "H) music",
                                "I) outlook",
                                "J) superb",
                                "K) acceptance"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q46-50.png",
                        explanation: "The word 'Boycott' generally means to refuse to participate in patronizing a business as a form of protest, which aligns with 'avoidance'.  Hence, the correct answer is: 'B) avoidance'."

                },
                {
                        //51
                        //
                        //index a0 effort
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "I really appreciate the ______ you put into it.",
                        choices: ["A) effort",
                                "B) angst",
                                "C) challenge"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q51-55.png",
                        explanation: "The word 'effort' fits best as it refers to the hard work or energy put into completing a task.  Hence, the correct answer is: 'A) effort'."

                },
                {
                        //52
                        //
                        //index a0 many
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "You worked late nights for ______ weeks to complete this task.",
                        choices: ["A) many",
                                "B) routine",
                                "C) unique"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q51-55.png",
                        explanation: "The word 'many' is the most appropriate choice as it refers to an extended period of time so 'many weeks' fits here.  Hence, the correct answer is: 'A) many'."

                },
                {
                        //53
                        //
                        //index c2 for
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "Thank you as well ______ doing this on your own without any help from our team members.",
                        choices: ["A) of",
                                "B) on",
                                "C) for"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q51-55.png",
                        explanation: "The phrase 'for doing this' is grammatically correct and the entire correct sentence conveys Mike's appreciation for Chris' work: 'Thank you as well for doing this…'.  Hence, the correct answer is: 'C) for'."

                },
                {
                        //54
                        //
                        //index c2 so
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "We will be treating you to lunch today ______ bring an appetite!",
                        choices: ["A) because",
                                "B) then",
                                "C) so"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q51-55.png",
                        explanation: "The phrase '...so bring an appetite!' logically connects the lunch offer with the implied action of eating.  Hence, the correct answer is: 'C) so'."

                },
                {
                        //55
                        //
                        //index c2 Best
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "______, Mike",
                        choices: ["A) Kind",
                                "B) Where",
                                "C) Best"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q51-55.png",
                        explanation: "The closing sentiment of an email or letter is oftentimes 'Sincerely' or 'Thanks' or 'Best'.  Here, the words 'Kind' and 'Where' don't make sense as the closing sentiment.  Therefore, the correct answer is: 'C) Best'."

                },
                {
                        //56
                        //
                        //index 2 "He studied..."
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What occurred next chronologically?",
                        choices: ["After his nuptials, he got into politics and at 33, he drafted the Declaration of Independence.",
                                "Later on, he served as the 3rd US President for two terms.",
                                "He studied at the College of William and Mary, then read law.",
                                "After his Presidential tenure, Jefferson retired to Monticello.",
                                "There, in his later years, he pondered such projects as his grand designs for the University of Virginia.",
                                "After college, he married Martha Wayles Skelton and took her to live in his mountaintop home, Monticello."
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q56-61.png",
                        explanation: "Education typically follows one’s birth and childhood, so Jefferson’s time at college and his legal studies come next."
                },
                {
                        //57
                        //
                        //index 5 "After college"
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What occurred next chronologically?",
                        choices: ["After his nuptials, he got into politics and at 33, he drafted the Declaration of Independence.",
                                "Later on, he served as the 3rd US President for two terms.",
                                "He studied at the College of William and Mary, then read law.",
                                "After his Presidential tenure, Jefferson retired to Monticello.",
                                "There, in his later years, he pondered such projects as his grand designs for the University of Virginia.",
                                "After college, he married Martha Wayles Skelton and took her to live in his mountaintop home, Monticello."
                        ],
                        correctAnswer: 5,
                        image: "img/aptis1_q56-61.png",
                        explanation: "After completing his education, Jefferson started his adult life by marrying and establishing his household at Monticello."
                },
                {
                        //58
                        //
                        //index 0 "After his nuptials"
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What occurred next chronologically?",
                        choices: ["After his nuptials, he got into politics and at 33, he drafted the Declaration of Independence.",
                                "Later on, he served as the 3rd US President for two terms.",
                                "He studied at the College of William and Mary, then read law.",
                                "After his Presidential tenure, Jefferson retired to Monticello.",
                                "There, in his later years, he pondered such projects as his grand designs for the University of Virginia.",
                                "After college, he married Martha Wayles Skelton and took her to live in his mountaintop home, Monticello."
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q56-61.png",
                        explanation: "Jefferson’s political career began after his marriage and the drafting of the Declaration of Independence is a pivotal milestone in his life."
                },
                {
                        //59
                        //
                        // index 1 "Later on"
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What occurred next chronologically?",
                        choices: ["After his nuptials, he got into politics and at 33, he drafted the Declaration of Independence.",
                                "Later on, he served as the 3rd US President for two terms.",
                                "He studied at the College of William and Mary, then read law.",
                                "After his Presidential tenure, Jefferson retired to Monticello.",
                                "There, in his later years, he pondered such projects as his grand designs for the University of Virginia.",
                                "After college, he married Martha Wayles Skelton and took her to live in his mountaintop home, Monticello."
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q56-61.png",
                        explanation: "Jefferson’s service as the 3rd President of the United States follows his early political contributions."
                },
                {
                        //60
                        //
                        // index 3 "After his"
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What occurred next chronologically?",
                        choices: ["After his nuptials, he got into politics and at 33, he drafted the Declaration of Independence.",
                                "Later on, he served as the 3rd US President for two terms.",
                                "He studied at the College of William and Mary, then read law.",
                                "After his Presidential tenure, Jefferson retired to Monticello.",
                                "There, in his later years, he pondered such projects as his grand designs for the University of Virginia.",
                                "After college, he married Martha Wayles Skelton and took her to live in his mountaintop home, Monticello."
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q56-61.png",
                        explanation: "After completing his presidency, Jefferson returned to Monticello for retirement, marking the next phase of his life."
                },
                {
                        //61
                        //
                        // index 4 "There, in his"
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What occurred next chronologically?",
                        choices: ["After his nuptials, he got into politics and at 33, he drafted the Declaration of Independence.",
                                "Later on, he served as the 3rd US President for two terms.",
                                "He studied at the College of William and Mary, then read law.",
                                "After his Presidential tenure, Jefferson retired to Monticello.",
                                "There, in his later years, he pondered such projects as his grand designs for the University of Virginia.",
                                "After college, he married Martha Wayles Skelton and took her to live in his mountaintop home, Monticello."
                        ],
                        correctAnswer: 4,
                        image: "img/aptis1_q56-61.png",
                        explanation: "Someone's 'later years' is the final years of his/her life.  Hence, the correct answer is: 'There, in his later years, he pondered such projects as his grand designs for the University of Virginia'."
                },
                {
                        //62
                        //
                        //index 7 prevailing
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "In the latter part of Galileo's life, he was under house arrest simply because he supported Copernican heliocentric theory that stated that the sun was the center of the solar system when the ______ theory was that the earth was the center of the solar system.",
                        choices: ["failing",
                                "appoints",
                                "denied",
                                "finishes",
                                "conceives",
                                "inventing",
                                "request",
                                "prevailing",
                                "found",
                                "sentenced"
                        ],
                        correctAnswer: 7,
                        image: "img/aptis1_q62-68.png",
                        explanation: "The correct answer is 'prevailing' because it refers to the widely accepted theory at the time."
                },
                {
                        //63
                        //
                        //index 3 finishes
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "In 1630, he ______ his work in April for Dialogue Concerning Two Chief World Systems and it garners publication two years later.",
                        choices: ["failing",
                                "appoints",
                                "denied",
                                "finishes",
                                "conceives",
                                "inventing",
                                "request",
                                "prevailing",
                                "found",
                                "sentenced"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q62-68.png",
                        explanation: "The correct word is 'finishes' because it describes the completion of his work, especially because 'it garners publication two years later'."
                },
                {
                        //64
                        //
                        //index 1
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "Pope Urban VIII ______ a commission to examine the book and he gets sent by the commission to the Inquisition...",
                        choices: ["failing",
                                "appoints",
                                "denied",
                                "finishes",
                                "conceives",
                                "inventing",
                                "request",
                                "prevailing",
                                "found",
                                "sentenced"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q62-68.png",
                        explanation: "The correct word is 'appoints' because it refers to the Pope assigning a group to evaluate the book."
                },
                {
                        //65
                        //
                        //index found 8
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "...he gets sent by the commission to the Inquisition where he is ______ guilty...",
                        choices: ["failing",
                                "appoints",
                                "denied",
                                "finishes",
                                "conceives",
                                "inventing",
                                "request",
                                "prevailing",
                                "found",
                                "sentenced"
                        ],
                        correctAnswer: 8,
                        image: "img/aptis1_q62-68.png",
                        explanation: "The correct word is 'found' because it describes the outcome of the Inquisition's decision."
                },
                {
                        //66
                        //
                        //index sentenced 9
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "...______ to house arrest by the Pope indefinitely.",
                        choices: ["failing",
                                "appoints",
                                "denied",
                                "finishes",
                                "conceives",
                                "inventing",
                                "request",
                                "prevailing",
                                "found",
                                "sentenced"
                        ],
                        correctAnswer: 9,
                        image: "img/aptis1_q62-68.png",
                        explanation: "The correct word is 'sentenced' because it relates to the punishment imposed on Galileo."
                },
                {
                        //67
                        //
                        //index 0 failing
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "Later, in 1637, Galileo loses his eyesight after being in ______ health for several years.",
                        choices: ["failing",
                                "appoints",
                                "denied",
                                "finishes",
                                "conceives",
                                "inventing",
                                "request",
                                "prevailing",
                                "found",
                                "sentenced"
                        ],
                        correctAnswer: 0,
                        image: "img/aptis1_q62-68.png",
                        explanation: "The correct word is 'failing' because it describes Galileo’s deteriorating health condition."
                },
                {
                        //68
                        //
                        //index
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "His ______ to be freed for health reasons is denied, yet he still keeps pondering, tinkering, and inventing as he conceives of a pendulum-controlled clock in 1641.",
                        choices: ["failing",
                                "appoints",
                                "denied",
                                "finishes",
                                "conceives",
                                "inventing",
                                "request",
                                "prevailing",
                                "found",
                                "sentenced"
                        ],
                        correctAnswer: 6,
                        image: "img/aptis1_q62-68.png",
                        explanation: "The correct word is 'request' because it refers to his plea to be released from house arrest."
                },
                {
                        //69
                        //
                        //index b1
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What is the Best Heading Title for Paragraph 1?",
                        choices: ["A) The Contributions of Sigmund Freud",
                                "B) Overview of Psychology & Earliest Record of Psychological Experiment",
                                "C) What Are Psychotropics And How Did They Serve As the Basis For Psychology?",
                                "D) How Wundt's Work Led To The First Psychology Lab Launch in the US",
                                "E) Forerunners To Psychology",
                                "F) Wilhelm Wundt: Modern Psychology Forefather",
                                "G) Do Our Senses Exactly Mirror the External World?",
                                "J) [0 - Example Paragraph Heading] Introduction to the History of Modern Psychology"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q69-73.png",
                        explanation: "This paragraph discusses the earliest psychological experiment during the time of Pharaoh Psamtik I and the importance of history in understanding psychology.  The phrase 'earliest record of a psychological experiment' directly aligns with the correct answer: 'B) Overview of Psychology & Earliest Record of Psychological Experiment'."

                },
                {
                        //70
                        //
                        //index 4e
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What is the Best Heading Title for Paragraph 2?",
                        choices: ["A) The Contributions of Sigmund Freud",
                                "B) Overview of Psychology & Earliest Record of Psychological Experiment",
                                "C) What Are Psychotropics And How Did They Serve As the Basis For Psychology?",
                                "D) How Wundt's Work Led To The First Psychology Lab Launch in the US",
                                "E) Forerunners To Psychology",
                                "F) Wilhelm Wundt: Modern Psychology Forefather",
                                "G) Do Our Senses Exactly Mirror the External World?",
                                "J) [0 - Example Paragraph Heading] Introduction to the History of Modern Psychology"
                        ],
                        correctAnswer: 4,
                        image: "img/aptis1_q69-73.png",
                        explanation: "The focus of this paragraph is on the philosophical and physiological influences that served as precursors to psychology.  It mentions philosophers like John Locke and Thomas Reid who emphasized empiricism, making the correct answer choice: 'E) Forerunners to Psychology'."

                },
                {
                        //71
                        //
                        //index g 6
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What is the Best Heading Title for Paragraph 3?",
                        choices: ["A) The Contributions of Sigmund Freud",
                                "B) Overview of Psychology & Earliest Record of Psychological Experiment",
                                "C) What Are Psychotropics And How Did They Serve As the Basis For Psychology?",
                                "D) How Wundt's Work Led To The First Psychology Lab Launch in the US",
                                "E) Forerunners To Psychology",
                                "F) Wilhelm Wundt: Modern Psychology Forefather",
                                "G) Do Our Senses Exactly Mirror the External World?",
                                "J) [0 - Example Paragraph Heading] Introduction to the History of Modern Psychology"
                        ],
                        correctAnswer: 6,
                        image: "img/aptis1_q69-73.png",
                        explanation: "This paragraph discusses the fallibility of human senses and how sensory experiences differ from external reality.  The work of Helmholtz and psychophysics aligns with the question posed in the heading.  Hence, the correct answer choice is: 'G) Do Our Senses Exactly Mirror the External World'?"

                },
                {
                        //72
                        //
                        //index f 5
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What is the Best Heading Title for Paragraph 4?",
                        choices: ["A) The Contributions of Sigmund Freud",
                                "B) Overview of Psychology & Earliest Record of Psychological Experiment",
                                "C) What Are Psychotropics And How Did They Serve As the Basis For Psychology?",
                                "D) How Wundt's Work Led To The First Psychology Lab Launch in the US",
                                "E) Forerunners To Psychology",
                                "F) Wilhelm Wundt: Modern Psychology Forefather",
                                "G) Do Our Senses Exactly Mirror the External World?",
                                "J) [0 - Example Paragraph Heading] Introduction to the History of Modern Psychology"
                        ],
                        correctAnswer: 5,
                        image: "img/aptis1_q69-73.png",
                        explanation: "This paragraph highlights Wilhelm Wundt's contributions to modern psychology, including his establishment of experimental psychology and a laboratory.  The heading is an accurate reflection of his role as the 'forefather' of modern psychology.  Hence, the correct answer is: 'F) Wilhelm Wundt: Modern Psychology Forefather'."

                },
                {
                        //73
                        //
                        //index d 3
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "What is the Best Heading Title for Paragraph 5?",
                        choices: ["A) The Contributions of Sigmund Freud",
                                "B) Overview of Psychology & Earliest Record of Psychological Experiment",
                                "C) What Are Psychotropics And How Did They Serve As the Basis For Psychology?",
                                "D) How Wundt's Work Led To The First Psychology Lab Launch in the US",
                                "E) Forerunners To Psychology",
                                "F) Wilhelm Wundt: Modern Psychology Forefather",
                                "G) Do Our Senses Exactly Mirror the External World?",
                                "J) [0 - Example Paragraph Heading] Introduction to the History of Modern Psychology"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q69-73.png",
                        explanation: "This paragraph discusses the global influence of Wundt’s work, specifically how it inspired the establishment of the first psychology lab in the United States.  The heading matches this progression and focuses on Wundt’s legacy.  Hence, the correct answer is: 'D) How Wundt's Work Led To The First Psychology Lab Launch in the US'."

                },
                {
                        //74
                        //
                        //index b1
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "For the soldiers of the First World War, fighting was an ______ circumstance rather than the norm.",
                        choices: [
                                "A) respectful",
                                "B) exceptional",
                                "C) morale",
                                "D) extra",
                                "E) respective",
                                "F) superb",
                                "G) morals"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q74-75.png",
                        explanation: "The word 'exceptional' fits in the first blank as it contrasts with the usual or normal life of soldiers.  Fighting was not the 'norm' for many soldiers, but rather was an exceptional – or 'rare' – circumstance.  Hence, the answer choice: 'B) exceptional' is correct."

                },
                {
                        //75
                        //
                        //index c2
                        qType: "Reading - 25 Questions - 30 Minutes",
                        question: "When armies were hard-pressed by their enemy – as was the case in the German army in the autumn of 1918 – repeated exposure to the stress of combat could lead to a collapse of ______.",
                        choices: [
                                "A) respectful",
                                "B) exceptional",
                                "C) morale",
                                "D) extra",
                                "E) respective",
                                "F) superb",
                                "G) morals"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q74-75.png",
                        explanation: "The word 'morale' fits in the second blank as it refers to the mental and emotional state of soldiers, especially regarding their readiness and willingness to continue fighting.  Repeated exposure to the stresses of combat could lead to a collapse of morale.  Hence, the correct answer choice is: 'C) morale'."

                },
                {
                        //76
                        //
                        //index b1
                        qType: "Listening - 25 Questions",
                        question: "Paula wants to improve her public speaking skills.  How does she plan to do so?  Paula plans to do so by ______.",
                        choices: [
                                "A) Taking an online course on the subject",
                                "B) Learning from her neighbor who is a public speaker",
                                "C) Taking an in-person course on the subject",
                                "D) Reading online books about public speaking"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_76_audio.mp3",
                        explanation: "The recording is as follows: 'Boris: Paula, did you end up improving your public speaking skills?  Paula:  Yes, but I didn't do what you and I had discussed.  Boris: Oh, so you didn't take a course on the subject?  Paula: No. I found out that my neighbor Linda has a strong public speaking background with excellent corporate experience.  Boris: Oh, so you're gonna get help from her?  Paula: Bingo Boris. It's a no-brainer really'.  Paula mentioned that she didn't take the course they had discussed and instead decided to get help from her neighbor, Linda, who has a strong background in public speaking.  Therefore, the best and correct answer is 'B) Learning from her neighbor who is a public speaker'."
                },
                {
                        //77
                        //
                        //indexb1
                        qType: "Listening - 25 Questions",
                        question: "Melissa calls her friend to ask for a good sushi restaurant in the area.  What is the best restaurant according to her friend?",
                        choices: [
                                "A) Shushi Sushi",
                                "B) Today Sushi",
                                "C) Taste of Japan",
                                "D) Sushinator"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_77_audio.mp3",
                        explanation: "The recording is as follows: 'Melissa: Hi Nicole. Would you mind sharing with me your opinion on the best sushi restaurant in the city?  I know there are online reviews, but I trust your insights the most.  Nicole: I appreciate you asking me.  I know that though there are tons of 5-star reviews for Today Sushi and Shushi Sushi, my personal fave is Today Sushi.  Good portions and good food quality and service.  Melissa: What about Taste of Japan?  Nicole: Underwhelming to be honest, especially for the steep price.  Melissa: Thank you for your thoughts on this.  I knew that you were a bona fide sushi expert'.  Nicole mentions that while both 'Today Sushi' and 'Shushi Sushi' have many 5-star reviews, her personal favorite is 'Today Sushi' because of its good portions, food quality, and service.  Hence, the correct answer is: 'B) Today Sushi'."
                },
                {
                        //78
                        //
                        //index d3
                        qType: "Listening - 25 Questions",
                        question: "Adam wants to start work at 8am for this week instead of 7am.  Is this okay with the boss?",
                        choices: [
                                "A) Yes, with no conditions.",
                                "B) No.",
                                "C) Yes, with the condition that he come into the office to work on the weekend.",
                                "D) Yes, with the condition that he leaves work an hour later each day this week."
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_78_audio.mp3",
                        explanation: "The recording is as follows: 'Adam: Can I come in at 8am instead of 7am this week?  Is this ok?  Boss: Sure, as long as you stay an extra hour each workday since you are an hourly worker and we need you here 8 hours per day.  Adam: That works for me.  Thanks.'  The correct answer is clearly: 'D) Yes, with the condition that he leaves work an hour later each day this week'."

                },
                {
                        //79
                        //
                        //indexc2
                        qType: "Listening - 25 Questions",
                        question: "Ayan calls you and leaves a voicemail on your machine to change when his going-away party will be.  What day will the party be?  His party will be this ______.",
                        choices: [
                                "A) Friday afternoon",
                                "B) Friday night",
                                "C) Saturday afternoon",
                                "D) Saturday night"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_79_audio.mp3",
                        explanation: "The recording is as follows: 'Ayan: Hi there. I want my party to be this Friday night.  On second thought, let's make it Saturday early afternoon.  People need to get some rest after the festivities.  I hope that's amenable to you and the gang'.  Ayan initially planned his party for Friday night but later decided on Saturday early afternoon to allow people to rest after the festivities.  This makes 'C) Saturday afternoon' the correct answer.  The other options are incorrect as they do not reflect the final decision Ayan communicated."

                },
                {
                        //80
                        //
                        //indexb1
                        qType: "Listening - 25 Questions",
                        question: "Armando discusses his choice between two companies to work for.  Which company does he choose?  Armando chose ______.",
                        choices: [
                                "A) Terrapinning Manufacturing",
                                "B) PlugNPlayz Manufacturing",
                                "C) Terrapinning Consulting",
                                "D) PlugNPlayz Consulting"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_80_audio.mp3",
                        explanation: "The recording is as follows: 'Armando: While I am oscillating between Terrapinning Manufacturing & PlugNPlayz Manufacturing, I think I am going to choose the latter rather than the former.  I really liked the Manager who I would be reporting to at PlugNPlayz and the 5% 401K match also was a nice kicker.  The location wasn't as good as with Terrapinning, but the work-from-home on Fridays option is a nice concession'.  Armando explicitly mentions he is 'oscillating between Terrapinning Manufacturing & PlugNPlayz Manufacturing' and decides on 'the latter rather than the former'.  The word 'latter' refers to 'PlugNPlayz Manufacturing' (the second company mentioned or the last company mentioned), making the correct answer 'B) PlugNPlayz Manufacturing'."

                },
                {
                        //81
                        //
                        //index d3
                        qType: "Listening - 25 Questions",
                        question: "Listen to two parents discussing their kids' college savings plan.  What do they agree on?  They want to ______.",
                        choices: [
                                "A) lower it to $100 per month",
                                "B) raise it to $400 per month",
                                "C) lower it to zero",
                                "D) raise it to $300 per month"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_81_audio.mp3",
                        explanation: "The recording is as follows: 'Mom: Should we add to our monthly college savings plan for David?  Dad: We are already doing $200 per month.  You want to raise it to what?  Mom: $400.  Dad: Why?  Mom: He is in high school now and he's been earning A's and B's.  Dad: Ok, let's do $300 a month.  Mom: Sure'.  The parents initially discuss their current savings of '$200 per month.' The mom suggests increasing it to '$400', but the dad proposes '$300 a month', which the mom agrees to.  Therefore, the correct answer is: 'D) raise it to $300 per month'."

                },
                {
                        //82
                        //
                        //index b1
                        qType: "Listening - 25 Questions",
                        question: "Listen to the young man talk with a young woman about the phone he wants to buy.  What type of phone does he want to buy?  He wants to buy a ______.",
                        choices: [
                                "A) smartphone",
                                "B) flip-phone",
                                "C) rotary phone",
                                "D) traditional landline home phone"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_82_audio.mp3",
                        explanation: "The recording is as follows: 'Young Man: I am thinking about buying a smartphone today.  Young Woman: Are you budget-conscious or no?  Young Man: Good question.  I am.  In fact, I am actually reconsidering altogether.  Young Woman: How come?  Young Man: I don't want to be chained to my phone, internet, social media, etc.  Hence, I am seriously considering instead buying a flip-phone.  Young Woman: A what?  Young Man: I'm serious.  I'll also save hundreds of dollars.  I'll just use it to make calls or receive calls.  That's it.  Young Woman: Is that it there?  Looks small.  Where are you going?  Young Man: To the register'.  The young man initially mentions considering a smartphone but then decides against it, saying, 'I don't want to be chained to my phone, internet, social media, etc.'  Instead, he opts for a flip-phone, highlighting its simplicity and cost-effectiveness: 'I'll just use it to make calls or receive calls'.  Hence, the correct answer is: 'B) flip-phone'."

                },
                {
                        //83
                        //
                        //index c2
                        qType: "Listening - 25 Questions",
                        question: "Listen to the lady talking about a car.  What does she like best about it?  She likes ______ the best.",
                        choices: [
                                "A) color",
                                "B) fuel economy",
                                "C) low price",
                                "D) high price"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_83_audio.mp3",
                        explanation: "The recording is as follows: 'This car is really nice.  I don't like the small cupholders and the lack of a middle armrest in the back seat, but I do like the fuel economy and the color.  What I like the most, however, is the modest price of this car, especially when comparing the same sedan type of competing manufacturers which are over ten-thousand-dollars more'.  The lady mentions liking the fuel economy and the color of the car but explicitly states, 'What I like the most, however, is the modest price of this car.'  This indicates that the low price is her favorite feature, making 'C) low price' the correct answer."

                },
                {
                        //84
                        //
                        //index d3
                        qType: "Listening - 25 Questions",
                        question: "Listen to the two friends discussing an investment opportunity.  What is the biggest challenge with the opportunity?  The biggest challenge is ______.",
                        choices: [
                                "A) the investment is risky",
                                "B) the investment is fun",
                                "C) the investment is boring",
                                "D) the investment is murky"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_84_audio.mp3",
                        explanation: "The recording is as follows: 'Young Man: It looks risky.  Young Woman: It is though it's not as speculative as some other investments out there.  Young Man: Because the principal is protected?  Young Woman: Yes.  Young Man: But that's my biggest challenge with this opportunity.  How can the principal be protected?  It is confusing and murky and difficult to understand how the investment works.  Young Woman: You're right'.  The young man states, 'It is confusing and murky and difficult to understand how the investment works,' indicating that the lack of clarity about the investment is his primary concern.  While the investment is also described as risky, the biggest challenge emphasized in the conversation is its murkiness, making 'D) the investment is murky' the correct answer."

                },
                {
                        //85
                        //
                        //index b1
                        qType: "Listening - 25 Questions",
                        question: "Listen to the announcement.  Whose starting at the station on the following Monday?  The person starting at the station on the following Monday is ______.",
                        choices: [
                                "A) Morrison Davis",
                                "B) Lacey Linkmeyer",
                                "C) Stewart Davis",
                                "D) Stewart McCourt"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_85_audio.mp3",
                        explanation: "The recording is as follows: 'Announcer: Today's bulletin will address company updates and the new hires at the company.  We are launching our new product on Wednesday and there is a company-wide party happening on Tuesday at 5PM.  New hires include Morrison Davis this Friday in HR, Lacey Linkmeyer in Marketing on Monday, and Stewart McCourt in Sales on Wednesday.  Please feel free to say hello if you see these new faces walking around in our offices'.  The announcement states, 'New hires include Morrison Davis this Friday in HR, Lacey Linkmeyer in Marketing on Monday, and Stewart McCourt in Sales on Wednesday.'  Since Lacey Linkmeyer is the one mentioned as starting on Monday, the correct answer is 'B) Lacey Linkmeyer'."

                },
                {
                        //86
                        //
                        //indexc2
                        qType: "Listening - 25 Questions",
                        question: " Larry calls his friend.  What time will his car be dropped off?  His car will be dropped off at ______.",
                        choices: [
                                "A) 12:00PM today",
                                "B) 12:30PM today",
                                "C) 12:00PM tomorrow",
                                "D) 12:30PM tomorrow"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_86_audio.mp3",
                        explanation: "The recording is as follows: 'Larry: Hi Reece.  I brought your car to my mechanic buddy this weekend.  He worked his magic and fixed the muffler sound that you were hearing and he also changed the oil and rotated your tires.  I will drop your car off at Noon tomorrow though I can't stay long at your house because I have a 12:30 in the city center'.  Larry says, 'I will drop your car off at Noon tomorrow', making it clear that the car will be dropped off at 12:00PM tomorrow.  This rules out all other options as C is correct."

                },
                {
                        //87
                        //
                        //index c2
                        qType: "Listening - 25 Questions",
                        question: "Listen to an announcement in a furniture store.  Which items are on sale this weekend?  The items on sale this weekend are ______.",

                        choices: [
                                "A) all couches",
                                "B) all loveseats",
                                "C) all couches and loveseats on the showroom floor",
                                "D) some couches"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_87_audio.mp3",
                        explanation: "The recording is as follows: 'Announcer: Attention all shoppers.  We have exciting news to share with you.  We are opening early this weekend for the all-weekend sale.  Doors open at 5am and they don't close until 11pm.  Items on sale include all showroom couches and loveseats.  We accept cash, card, and even have financing available.  Bring your whole family if you wish this weekend and re-invent your home with FFF Furniture Supplies'.  The announcer specifically mentions, 'Items on sale include all showroom couches and loveseats'.  This clearly indicates that all couches and loveseats on the showroom floor are on sale, making C the correct answer."


                },
                {
                        //88
                        //
                        //indexd3
                        qType: "Listening - 25 Questions",
                        question: "Listen to an announcement for a Going Out of Business Sale.  What is the store called that is going out of business?",

                        choices: [
                                "A) Loveseat Emporium",
                                "B) Lighting Logistics",
                                "C) Lasso Lighting",
                                "D) Ladera Lighting"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_88_audio.mp3",
                        explanation: "The recording is as follows: 'Announcer: We are having a blow-out going out of business sale all week. Our store has been operating for 18 years and we have finally decided to close the doors for good.  Everything is on sale and everything must go.  Ladera Lighting has been your one-stop-shop for indoor home and office lighting for almost two decades and we are appreciative of all the community support and patronage over the years.  Thank you and we hope you bring everyone you know who wants some high-quality lighting for a low-low-cost all week long'.  The announcer specifically mentions the store name as Ladera Lighting, which has been operating for 18 years and is now going out of business. This makes 'D) Ladera Lighting' the correct answer."
                },
                {
                        //89
                        //
                        //indexd3
                        qType: "Listening - 25 Questions",
                        question: "Listen to the conversation between brother and sister.  What are they excited about?  The siblings are excited about ______.",

                        choices: [
                                "A) the brother's high Biology Exam score",
                                "B) the sister's high Biology Exam score",
                                "C) their Mom getting them tickets to the zoo",
                                "D) their Dad getting them tickets to the zoo"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_89_audio.mp3",
                        explanation: "The recording is as follows: 'Brother: I am bummed about my Biology Test Score.  Sister: I heard. Mom said you got a C.  Brother: I earned a C. I should have studied more I guess.  Sister: Maybe. Well, I've got some good news.  Brother: What is it?  Sister: Dad got us tickets to the zoo on Sunday.  Brother: Sounds awesome. It has been too long since we have been there. I am gonna go do my homework now so I can take the entire day off on Sunday.  Sister: Good idea. Me too'.  The siblings are excited about their Dad getting them tickets to the zoo on Sunday as mentioned by the sister in the conversation.  This makes 'D) their Dad getting them tickets to the zoo' the correct answer."
                },
                {
                        //90
                        //
                        //indexb1
                        qType: "Listening - 25 Questions",
                        question: "Listen to the announcement about the cruise.  How many restaurants are there on the ship?  There are ______ restaurants on the ship.",

                        choices: [
                                "A) 5",
                                "B) 7",
                                "C) 8",
                                "D) 10"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_90_audio.mp3",
                        explanation: "The recording is as follows: 'Announcer: This is your favorite cruise line sharing some of our amazing amenities that we've been offering since 2001 when our very first cruise was launched.  Not only do we have 8 swimming pools and spas, but we also offer 5 different unique neighborhoods, and 7 restaurants that all serve breakfast, lunch, and dinner around the clock.  Take a gander over to any or all of these wonderful places on our luxurious ship.  You're sure to love it here'.  The announcer mentions that there are 7 restaurants on the ship, which serve breakfast, lunch, and dinner around the clock.  Therefore, 'B) 7' is the correct answer."

                },
                {
                        //91
                        //
                        //indexc2
                        qType: "Listening - 25 Questions",
                        question: "Listen to Terry discuss the pros and cons of his son attending college at this particular school in the Fall.  What is the worst con of this school according to Terry?  The worst con of this school according to Terry is ______.",

                        choices: [
                                "A) the high tuition",
                                "B) the high dorm fees",
                                "C) the academic reputation of most majors is low-to-middling",
                                "D) the distance of the college from the family home"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_91_audio.mp3",
                        explanation: "The recording is as follows: 'Terry: The location of the college is ideal for our son because he will be able to live at home while attending school and he can save money on dorm fees.  Also, the tuition is reasonable, especially when considering his grant-heavy financial aid package, even though the sticker price of the school is outrageous.  Perhaps the worst thing about the school is its academic reputation is mostly below average outside of his major of English so if he changes majors, the quality of his education and degree will undoubtedly go down'.  Terry mentions that the worst thing about the school is its academic reputation being mostly below average outside of his son's major in English.  If his son changes majors, the quality of his education and degree would undoubtedly go down. This makes the academic reputation the worst con.  Hence, the correct answer is: 'C) the academic reputation of most majors is low-to-middling'."

                },
                {
                        //92
                        //
                        //indexb1
                        qType: "Listening - 25 Questions",
                        question: "Listen to the announcement about upcoming sports events.  Where will the 5K race be held?",


                        choices: [
                                "A) Indoor Track A",
                                "B) Indoor Track B",
                                "C) Farther Field",
                                "D) Farthing Field"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_92_audio.mp3",
                        explanation: "The recording is as follows: 'Announcer: Lots of fun upcoming events for the sports-lover in all of us.  The 4x100 will be held at Indoor Track A later today at 3pm while the 3K and the 5K will be held at Indoor Track B tomorrow at 3pm and the discus and shot put events will be outside on the Farthing Field today in under an hour.  So put your sunscreen on, a hat, and maybe some shades and let's enjoy our amazing athletes as they compete for cash, prizes, but most importantly, glory'.  The 5K race is scheduled to be held at 'Indoor Track B tomorrow at 3pm', as mentioned in the announcement.  Therefore, 'B) Indoor Track B' is the correct answer."

                },
                {
                        //93
                        //
                        //indexd3
                        qType: "Listening - 25 Questions",
                        question: "Listen to the recording.  What documentary film is on in the afternoons only?  The documentary film that is only on in the afternoons is ______.",
                        choices: [
                                "A) The Canceled Courses",
                                "B) Morning Glory",
                                "C) Afternoon Courses",
                                "D) Morning Moonlight"
                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_93_audio.mp3",
                        explanation: "The recording is as follows: 'Announcer: Our film festival has brought films and patrons from over 37 countries.  First off, we have <i>The Canceled Courses</i>, a narrative fiction drama that plays mornings, afternoons, and evenings throughout the entire festival.  <i>Morning Moonlight</i>, however, a documentary comedy, is only playing during the afternoon runs this week though the rest of the documentary films in our fest will at least play in the mornings and afternoons all week, including the docu-drama award-winning short film, <i>Catering to the Whiz of Cheese</i>'.  The documentary film that is only playing in the afternoons is <i>Morning Moonlight</i> as specifically mentioned in the announcement.  Therefore, 'D) Morning Moonlight' is the correct answer."

                },
                {
                        //94
                        //c2
                        //index
                        qType: "Listening - 25 Questions",
                        question: "Listen to the guide introduce the tour.  When does the park close today?",
                        choices: [
                                "A) 5PM",
                                "B) 6PM",
                                "C) 7PM",
                                "D) 8PM"
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_94_audio.mp3",
                        explanation: "The recording is as follows: 'Male Guide: Our tour of our park today will include time allotments for photos and video plus we offer a lunch al fresco – meaning outside – as part of your park day pass today.  Our park has two convenient exits if you look and see the lights way over there and there, those are the exit gates.  We close at 7pm tonight and we encourage you to store your valuables in our handy lockers before departing on our fun-filled adventure in this wildlife-filled park.  I am your guide today and my name is Paul'.  The guide explicitly mentions that the park closes 'at 7pm tonight'.  Therefore, the correct answer is 'C) 7PM'."

                },
                {
                        //95
                        //
                        //index b1
                        qType: "Listening - 25 Questions",
                        question: "Listen to the news about a new library opening.  Where is the library located?",
                        choices: [
                                "A) Silverton",
                                "B) Silverton Springs",
                                "C) Leibniz",
                                "D) Libre Road"
                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_95_audio.mp3",
                        explanation: "The recording is as follows: 'Broadcaster: Our new local library is officially open.  Yes, the Libre Library of Silverton Springs is open from Monday to Friday 9am to 6pm and Saturday and Sunday from Noon to 6pm.  It cost $5 million dollars to build and features over 100,000 books, magazines, and games across 3 floors and was fully funded by a generous grant from Mr and Mrs Frederick & Laura Leibniz'.  The broadcaster mentions that the new local library is called the Libre Library of Silverton Springs, so the correct answer is 'B) Silverton Springs'."

                },
                {
                        //96
                        //d3
                        //index
                        qType: "Listening - 25 Questions",
                        question: "Listen to the message.  Why does Paolo call Ana?",
                        choices: [
                                "A) He wants to invite her to a potluck.",
                                "B) He wants to thank her for the potluck.",
                                "C) He wants to apologize for not showing up to the potluck.",
                                "D) He wants to apologize for not conducting himself properly at the potluck."

                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_96_audio.mp3",
                        explanation: "The recording is as follows: 'Hi Ana.  This is Paolo, your friend from Stats class.  Listen, I wanted to apologize for my behavior yesterday at the potluck.  I was having a bad day and I should not have been so snarky and disrespectful.  Please forgive me and I hope that our friendship is still solid'."

                },
                {
                        //97
                        //c2
                        //index
                        qType: "Listening - 25 Questions",
                        question: "Listen to a message about a house rental.  When is the house available for a viewing?  The house is available from ______.",
                        choices: [
                                "A) this Friday, Saturday, and Sunday from 2pm to 5pm",
                                "B) this Saturday, Sunday, and Monday from 2pm to 5pm",
                                "C) this Sunday, Monday, and Tuesday from 2pm to 5pm",
                                "D) this Monday, Tuesday, and Wednesday from 2pm to 5pm"


                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_97_audio.mp3",
                        explanation: "The recording is as follows: 'Thank you for calling this house hunting recorded line.  The house currently has renters in it so it is not going to be available for viewing until this Sunday between 2pm to 5pm.  Then it will be available at the same time for the following two days.  Please do not visit the home outside of those times and days as you may be disturbing the renters.  Thank you'.  The message states that the house will be available for viewing 'this Sunday between 2pm and 5pm', and then 'it will be available at the same time for the following two days'.  This means the house will also be available on Monday and Tuesday from 2pm to 5pm.  Hence, the correct answer is: 'C) this Sunday, Monday, and Tuesday from 2pm to 5pm'."

                },
                {
                        //98
                        //
                        //index b1
                        qType: "Listening - 25 Questions",
                        question: "Listen to the message.  What is Mrs. Smith's address?  Mrs. Smith's address is ______.",
                        choices: [
                                "A) 2345 Sweet Lane Washington USA 98682",
                                "B) 2323 Sugary Sweet Lane Washington USA 98888",
                                "C) 1234 Sugar Street Washington USA 90024",
                                "D) 2525 Sugary Sweet Street Washington DC USA 98989"

                        ],
                        correctAnswer: 1,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_98_audio.mp3",
                        explanation: "The recording is as follows: 'You have reached Mrs. Smith's apartment showing voicemail.  We are looking to lease the apartment for 12 months or even 24 months.  My address is 2323 Sugary Sweet Lane Washington USA 98888.  I am showing it in the mornings all month between 9am to 11am to those who can show written proof that they make at least three times the monthly rent'.  The voicemail clearly states that Mrs. Smith's address is '2323 Sugary Sweet Lane, Washington USA 98888'.  Hence, the correct answer is B."


                },
                {
                        //99
                        //d3
                        //index
                        qType: "Listening - 25 Questions",
                        question: "Listen to the message.  Where does the man want to meet Summer?",
                        choices: [
                                "A) BC Cafe",
                                "B) CC Cafe",
                                "C) Bridge Park",
                                "D) Bridgetown Park"

                        ],
                        correctAnswer: 3,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_99_audio.mp3",
                        explanation: "The recording is as follows: 'Hi Summer.  I initially wanted to meet at the CC Cafe, but since it's so nice outside, let's meet at Bridgetown Park instead.  We can enjoy the sunshine and you can even bring your dog to walk him out there.  3pm is ideal for me as I gotta get back to work by 4pm'.  The man initially wanted to meet at the CC Cafe, but then suggests meeting at Bridgetown Park because of the nice weather, and even mentions Summer can bring her dog there.  Hence, the correct answer is: 'D) Bridgetown Park'."


                },
                {
                        //100
                        //c2
                        //index
                        qType: "Listening - 25 Questions",
                        question: "Listen to the recording.  Why hasn't Kevin completed his project?",


                        choices: [

                                "A) His wife has been sick.",
                                "B) He forgot about the deadline.",
                                "C) He has been having challenges with the learning curve of the new software tool required to complete the project.",
                                "D) He himself has been sick."
                        ],
                        correctAnswer: 2,
                        image: "img/aptis1_q76-99.png",
                        audio: "audio/aptis1_100_audio.mp3",
                        explanation: "The recording is as follows: 'Hello.  This is Kevin.  I am almost done with the project, yet I haven't finished it mostly because I was struggling with the new software tool that we are using for the deliverable.  I appreciate your patience and diligence in helping me with the prep work for the project and I promise that I'll be done with the project by next Friday at the close of business'.  Kevin mentions that he has been struggling with the new software tool, which has caused delays in finishing the project.  Hence, the correct answer is: 'C) He has been having challenges with the learning curve of the new software tool required to complete the project'."


                },
        ];
        var questionCounter = 0; //Tracks question number
        var selections = []; //Array containing user choices
        var quiz = $("#quiz"); //Quiz div object
        var defaultQuestionContent;
        defaultQuestionContent = $("#content").text();

        // Display initial question
        displayNext();

        // Click handler for the 'next' button
        $("#next").on("click", function (e) {
                e.preventDefault();

                // Suspend click listener during fade animation
                if (quiz.is(":animated")) {
                        return false;
                }
                choose();

                // If no user selection, progress stopped and pop-up alert
                if (isNaN(selections[questionCounter])) {
                        swal("Please make a selection.", "Choose the best option.", "warning");
                } else {
                        questionCounter++;
                        displayNext();
                }
        });

        // Click handler for the 'prev' button
        $("#prev").on("click", function (e) {
                e.preventDefault();

                if (quiz.is(":animated")) {
                        return false;
                }
                choose();
                questionCounter--;
                displayNext();
        });

        // Click handler for the 'Start Over' button
        $("#start").on("click", function (e) {
                e.preventDefault();

                if (quiz.is(":animated")) {
                        return false;
                }
                questionCounter = 0;
                selections = [];
                displayNext();
                $("#start").hide();
        });

        // Animates buttons on hover
        $(".button").on("mouseenter", function () {
                $(this).addClass("active");
        });
        $(".button").on("mouseleave", function () {
                $(this).removeClass("active");
        });

        // Creates and returns the div that contains the questions and
        // the answer selections
        function createQuestionElement(index) {
                var qElement = $("<div>", {
                        id: "question",
                });

                var header = $("<h2>Question " + (index + 1) + ":</h2>");
                qElement.append(header);

                var textProblem = $("<p>").append(questions[index].textProblem);
                qElement.append(textProblem);

                var question = $("<p>").append(questions[index].question);
                qElement.append(question);

                var radioButtons = createRadios(index);
                qElement.append(radioButtons);

                return qElement;
        }

        // Creates a list of the answer choices as radio inputs
        function createRadios(index) {
                var radioList = $("<ul>");
                var item;
                var input = "";
                for (var i = 0; i < questions[index].choices.length; i++) {
                        item = $("<li>");
                        input = '<label><input type="radio" name="answer" value=' + i + " />";
                        input += questions[index].choices[i];
                        input += "</label>";
                        item.append(input);
                        radioList.append(item);
                }
                return radioList;
        }

        // Reads the user selection and pushes the value to an array
        function choose() {
                selections[questionCounter] = +$('input[name="answer"]:checked').val();
        }

        // Displays next requested element
        function displayNext() {
                quiz.fadeOut(function () {
                        $("#question").remove();

                        if (questionCounter < questions.length) {
                                var question = questions[questionCounter];

                                // Show 'image' defined in question object

                                if (typeof question.image !== "undefined") {
                                        $("#image img").attr("src", question.image);
                                        $("#image").show();
                                } else {
                                        $("#image").hide();
                                }

                                if (typeof question.audio !== "undefined") {
                                        $("#audio").show();
                                        $("#audio audio").attr("src", "audio/" + question.audio);
                                        //$("#audio audio")[0].play();
                                } else {
                                        $("#audio").hide();
                                        $("#audio audio").stop();
                                }

                                // Show 'content' defined in question object
                                console.log(typeof question.content, defaultQuestionContent);
                                if (typeof question.content === "undefined") {
                                        $("#content").text(defaultQuestionContent);
                                } else {
                                        $("#content").text(question.content);
                                }

                                // Show 'qType' defined in question object
                                console.log(typeof question.qType, defaultQuestionContent);
                                if (typeof question.qType === "undefined") {
                                        $("#qType").text(defaultQuestionContent);
                                } else {
                                        $("#qType").text(question.qType);
                                }

                                var nextQuestion = createQuestionElement(questionCounter);
                                quiz.append(nextQuestion).fadeIn();
                                if (!isNaN(selections[questionCounter])) {
                                        $("input[value=" + selections[questionCounter] + "]").prop(
                                                "checked",
                                                true
                                        );
                                }

                                // Controls display of 'prev' button
                                if (questionCounter === 1) {
                                        $("#prev").show();
                                } else if (questionCounter === 0) {
                                        $("#prev").hide();
                                        $("#next").show();
                                }
                        } else {
                                var scoreElem = displayScore();
                                quiz.append(scoreElem).fadeIn();
                                $("#next").hide();
                                $("#prev").hide();
                                $("#start").show();
                        }
                });
        }

        // Computes score and returns a paragraph element to be displayed
        function displayScore() {
                var score = $("<p>", {
                        id: "question",
                });

                var numCorrect = 0;
                for (var i = 0; i < selections.length; i++) {
                        if (selections[i] === questions[i].correctAnswer) {
                                numCorrect++;
                        }
                }

                score.append(
                        "You got " +
                        numCorrect +
                        " questions out of " +
                        questions.length +
                        " right."
                );
                return score;
        }
})();
