moment.locale("en")
    // moment.updateLocale('hk')


const month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let dictionary = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11,
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'May': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Oct': 9,
    'Nov': 10,
    'Dec': 11,

}

// console.log(paragraph.search(regex));
class FormatDateTime {
    /**
     *
     let formatDateTime = new FormatDateTime()
     * @date 2022-01-13
     * @returns {class}
     */
    constructor() {
        this.startTime = "2022-01-12T19:06:31.047Z "
        this.endTime = "2022-01-12T20:06:31.047Z "
        this.startDate = "2022-01-12T19:06:31.047Z "
        this.endDate = "2022-01-12T20:06:31.047Z "
        this.html = "2018-12-31"
        this.seconds = 222

    }
    countInstances(string, word) {
        return string.split(word).length - 1;
    }
    capitalizeFirstLetter(string) {
        string = string.toLowerCase()
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    arrStringtoNum(arr) {
            return arr.map(Number);
        }
        /**
         * @example
         * getType(Date)
         *"2022-03-01T19:06:31.047Z"
         "00:22:00"
         "March 1, 2022"
         "Mar 1, 2022"
         "2022-03-01"
         "01-03-2022"
         "2022/03/01"
         new Date()
         23
         * @date 2022-01-13
         * @param {any} date
         * @returns {any}
         */
    getType(date) {
            // console.log(date.length)
            if (typeof date === "string") {
                date = date.toUpperCase()
            } else if (typeof date === "number") {
                let seconds = this.secondsToDigital(date)
                let splitByColon = seconds.split(":")
                let getDigital = this.arrStringtoNum(splitByColon)
                    // console.log(getDigital)
                return moment({
                    hour: parseInt(getDigital[0]),
                    minute: parseInt(getDigital[1]),
                    second: parseInt(getDigital[2])
                })
            } else {
                return moment(date)
            }
            // remove commas
            date = date.replaceAll(",", "")
            let startsWithLetter = new RegExp("^[A-Z]")
            let regular = date.match(startsWithLetter)
            let testDigital = new RegExp(/^([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?$/)
                // let testSlash = new RegExp(/[\/]/)
                // var html = date.match(testSlash)
                // console.log(this.countInstances(date, "/"))
            let slashes = this.countInstances(date, "/")
            let dashes = this.countInstances(date, "-")
            var digital = date.match(testDigital);
            let splitted = date.split(" ")
                // let colon = date.
            if (date.length > 20) {
                return moment(date)
            } else if (digital) {
                let splitByColon = date.split(":")
                if (splitByColon.length > 2) {
                    let num = this.arrStringtoNum(splitByColon)
                    return moment({
                        hour: num[0],
                        minute: num[1],
                        second: num[2]
                    })
                }
            } else if (slashes === 2) {
                // console.log(date)
                let splitted2 = date.split("/")
                let slashSplit = this.arrStringtoNum(splitted2)
                if (splitted2[0].length > 2) {
                    // console.log(slashSplit)
                    return moment({
                        year: slashSplit[0],
                        month: slashSplit[1] - 1,
                        day: slashSplit[2]
                    })
                } else {
                    // console.log(slashSplit)
                    return moment({
                        year: slashSplit[2],
                        month: slashSplit[1] - 1,
                        day: slashSplit[0]
                    })
                }
            } else if (dashes === 2) {
                let splitted3 = date.split("-")
                let dashSplit = this.arrStringtoNum(splitted3)
                if (splitted3[0].length > 2) {
                    // console.log(dashSplit)
                    return moment({
                        year: dashSplit[0],
                        month: dashSplit[1] - 1,
                        day: dashSplit[2]
                    })
                } else {
                    return moment({
                        year: dashSplit[2],
                        month: dashSplit[1] - 1,
                        day: dashSplit[0]
                    })
                }
            } else if (splitted[0].length > 2 && regular) {
                let capitalized = this.capitalizeFirstLetter(splitted[0])
                splitted[0] = capitalized
                let getMonth = dictionary[splitted[0]]
                return moment({
                    year: parseInt(splitted[2]),
                    month: getMonth,
                    day: parseInt(splitted[1])
                })
            }
        }
        /**
         * @example
         * console.log(formatDateTime.isBetween("March 3, 2020", "March 10, 2021"))
         * @description 
         * Good to use if you want to see a date is before another
         * @date 2022-01-20
         * @param {any} start
         * @param {any} end
         * @returns {any}
         */
    isBefore(start, end) {
            let dateOne = this.getType(start)
            let dateTwo = this.getType(end)
            let isTrue = dateOne.isBefore(dateTwo)
            return isTrue
        }
        /**
         * @example
         * console.log(formatDateTime.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")) // 3481
         console.log(formatDateTime.getDuration("2022-04-01T19:06:31.047Z", "2022-06-01T20:04:32.047Z", "days")) // 61.040289351851854
         * @date 2022-01-13
         * @param {any} start
         * @param {any} end
         * @param {any} type
         * @returns {any}
         */
    getDuration(start, end, type) {
        let dateOne = this.getType(start)
        let dateTwo = this.getType(end)
        let duration = moment.duration({
            from: dateOne,
            to: dateTwo
        });
        return duration.as(type)
    }

    /**
     * @example
     * getReadableFormat("Dec 11, 2012", "from") in 2 months
     * getReadableFormat("Dec 11, 2012", "to") 2 months ago
     * @date 2022-01-13
     * @param {any} getDate
     * @param {any} type
     * @returns {any}
     */
    getReadableFormat(getDate, type = "from") {
            let formatted = this.getType(getDate)
            if (type === "from") {
                return formatted.fromNow()
            } else {
                return formatted.toNow()
            }
        }
        /**
         * @example
         * console.log(formatDateTime.difference("00:22:00", "00:44:00", "seconds"))
         console.log(formatDateTime.difference("March 1, 2020", "March 1, 2021", "months"))
         * @date 2022-01-13
         * @param {any} one
         * @param {any} two
         * @param {any} type
         * @returns {any}
         */
    difference(one, two, type) {
            let dateOne = this.getType(one)
            let dateTwo = this.getType(two)
            return Math.abs(dateOne.diff(dateTwo, type))
        }
        /**
         * @example
         * console.log(formatDateTime.format("Dec 11, 2012", "HHMMSS"))
         * console.log(formatDateTime.format("March 1, 2022", "dateInput")) 2022 - 03 - 01 < input type = "date" / >
        //  console.log(formatDateTime.format("March 1, 2022", "timeInput")) 00:00:00 <input type="time" step="1" />
         console.log(formatDateTime.format("March 1, 2022", "localInput")) 2022 - 03 - 01 T00: 00: 00 < input type = "datetime-local"
         step = "1" / >
         * @date 2022-01-13
         * @param {any} date
         * @param {any} type localInput, dateInput, timeInput, 
         * @returns {any}
         */
    format(date, type) {
        let formats = {
            localInput: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
            dateInput: 'YYYY-MM-DD', // <input type="date" />
            timeInput: 'HH:mm:ss', // <input type="time" step="1" />
            weekInput: 'GGGG-[W]WW', // <input type="week" />
            monthInput: 'YYYY-MM', // <input type="month" />
        };
        let getDate = this.getType(date)
        if (formats[type]) {
            return getDate.format(formats[type])
        } else {
            return getDate.format(type)
        }
    }

    /**
     * @example
     * digitalToSeconds(00:33:22) -> seconds
     * @date 2022-01-13
     * @param {any} string
     * @returns {any}
     */
    digitalToSeconds(string) {
            let spliced = string.split(":")
            console.log(spliced)
            let hour = parseInt(spliced[0])
            let min = parseInt(spliced[1])
            let sec = parseInt(spliced[2])
            let totalHour = hour * 60 * 60
            let totalMin = min * 60
            let total = totalHour + totalMin + sec
        }
        /**
         * @example
         * formatDateToPost(stringInput)
         * @date 2022-01-13
         * @param {any} stringInput
         * @returns {any}
         */
    formatDateToPost(stringInput) {
        let date = this.getType(stringInput)
        let proper = date.toDate()
        return new Date(proper);
    }

    /**
     * @example
     * secondsString(seconds)
     * @date 2022-01-13
     * @param {any} seconds
     * @returns {any}
     */
    secondsString(seconds) {
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);

            var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }
        /**
         * console.log(formatDates.isBetween("2020-05-01", "2019-01-01", "2021-01-01"))
         * @description 
         * Good to use if you want to see a date is before another
         * @date 2022-01-20
         * @param {any} start
         * @param {any} end
         * @returns {any}
         */
    isBetween(target, start, end) {
            let dateZero = this.getType(target)
            let dateOne = this.getType(start)
            let dateTwo = this.getType(end)
            let isTrue = dateZero.isBetween(dateOne, dateTwo)
            return isTrue
        }
        /**
         * console.log(formatDateTime.secondsToDigital(23423)) 06: 30: 23
         * @date 2022-01-13
         * @param {any} seconds
         * @returns {any}
         */
    secondsToDigital(seconds) {
            var sec_num = parseInt(seconds, 10); // don't forget the second param
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return hours + ':' + minutes + ':' + seconds;
        }
        /**
         * getDate(date, options)
         * @date 2022-01-13
         * @param {any} getDate
         * @param {any} option
         * @returns {any}
         */
    getDate(getDate, option) {
        //   console.debug("DATE", getDate);
        let date = new Date(getDate);
        let getMonth = month[date.getMonth()];
        let getDay = date.getDate();
        let getYear = date.getFullYear();
        let getHour = date.getHours();
        let getMinutes = date.getMinutes();
        let getSeconds = date.getSeconds();
        //   console.debug("month", getMonth, "day", getDay, getYear);
        //   );
        let firstOption = getMonth + " " + getDay;
        let secondOption =
            getDay + "/" + getMonth + "/" + getYear;
        let thirdOption =
            getMonth + " " + getDay + ", " + getYear;
        let fourthOption =
            getMonth + " " + getDay + ", " + getYear;
        if (getHour < 10) {
            getHour = "0" + getHour
        }
        if (getMinutes < 10) {
            getMinutes = "0" + getMinutes
        }
        if (getSeconds < 10) {
            getSeconds = "0" + getSeconds
        }
        let fifthOption =
            getHour + ":" + getMinutes + ":" + getSeconds;

        if (option === 1) {
            return firstOption;
        } else if (option === 2) {
            return secondOption;
        } else if (option === 3) {
            return thirdOption;
        } else if (option === 4) {
            return fourthOption;
        } else if (option === 5) {
            return fifthOption;
        } else if (option === 6) {
            return fifthOption + " " + fourthOption
        } else {
            return "no date";
        }

    }
}
let formatDateTime = new FormatDateTime()