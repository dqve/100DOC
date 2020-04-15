/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */


/* ======= Model ======= */

var model = {
    students: [
        {
            name: "Slappy the Frog",
            
            days: [           
                true,
                true,
                false,
                false,
                true,
                true,
                true,
                false,
                true,
                false,
                true,
                true
            ],
            
            missed: 4

        },
        {
            name: "Lilly the Lizard",
            
            days: [           
                true,
                true,
                false,
                false,
                true,
                true,
                true,
                false,
                true,
                false,
                true,
                true
            ],
            
            missed: 4

        },
        {
            name: "Paulrus the Walrus",
            
            days: [           
                true,
                true,
                false,
                false,
                true,
                true,
                true,
                false,
                true,
                false,
                true,
                true
            ],
            
            missed: 4

        },
        {
            name: "Gregory the Goat",
            
            days: [           
               true,
                true,
                false,
                false,
                true,
                true,
                true,
                false,
                true,
                false,
                true,
                true
            ],
            
            missed: 4

        },
        {
            name: "Adam the Anaconda",
            
            days: [           
                true,
                true,
                false,
                false,
                true,
                true,
                true,
                false,
                true,
                false,
                true,
                true
            ],
            
            missed: 4

        }
    ]
};


/* ======= Octopus ======= */

var octopus = {

    init: function() {
        // tell our views to initialize
        view.init()
    },

        getStudents: function() {
            return model.students
        },

        changeStatus: function(id, dayId, status) {
            model.students[id].days[dayId] = !status
            status? model.students[id].missed++ :
            model.students[id].missed--
            
        }
};


/* ======= View ======= */

var view = {

    init: function() {
        // store admin pointers to our DOM elements for easy access later
        this.student = document.getElementById('student')
        
        this.render()
    },

    render: function() {
        var allStudents = octopus.getStudents()
        var one, elem, i, j, elemTd, elemIp, elemIpTd, elemS, daysList, each, studentArr, value, elemN, status
    
        for (i = 0; i < allStudents.length; i++) {
            // this is the student we're currently looping over
            one = allStudents[i]

            elem = document.createElement('tr')
            elemS = document.createElement('td')
            elemS.textContent = one.name
            elem.classList.add('student')
            elemS.classList.add('name-col')
            elem.appendChild(elemS)

            daysList = one.days
            
            //former implementation in objects: 


                /* array of keys of days for each student
                each = Object.keys(daysList);

                //debugg
                console.log(each);

                // array of keys of d
                 studentArr = each.map(key => {
                 value = daysList[key];

                 //debugg
                 console.log(key, value)
                 return value
                });
                */

         for (j = 0; j < daysList.length; j++) {
            elemIpTd = document.createElement('td')
            elemIpTd.classList.add('attend-col')
            elemIp = document.createElement('input')

            elemIp.type = "checkbox"
            elemIp.checked = daysList[j]

            
            elemIp.addEventListener('change', (function(id, dayId, status) {
                return function() {
                    octopus.changeStatus(id, dayId, status)
                    document.getElementById('student').innerHTML = ""
                    view.render()
                }
            })(i, j, elemIp.checked))

            elemIpTd.appendChild(elemIp)
            elem.appendChild(elemIpTd)
        }

        elemN = document.createElement('td')
        elemN.textContent = one.missed
        elemN.classList.add('missed-col')
        elem.appendChild(elemN)

        //add all students to the list
        this.student.appendChild(elem)
        }
    }
};

// make it go!
octopus.init()


/* All app
(function() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}());
/* STUDENT APPLICATION 
$(function() {
    var attendance = JSON.parse(localStorage.attendance),
        $allMissed = $('tbody .missed-col'),
        $allCheckboxes = $('tbody input');

    // Count a student's missed days
    function countMissing() {
        $allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    }

    // Check boxes, based on attendace records
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');

        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });

    // When a checkbox is clicked, update localStorage
    $allCheckboxes.on('click', function() {
        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        countMissing();
        localStorage.attendance = JSON.stringify(newAttendance);
    });

    countMissing();
}());
*/
