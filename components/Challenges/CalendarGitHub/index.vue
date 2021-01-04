<template>
<div>
  <div class="calendar-graph-wrap">

    <div class="myCalendar"></div>

  </div>


</div>
</template>

<script>
export default {
  data() {
    return {
      calendarGraph: {
        years: {
          2020: {
            month: {
              0: {
                1: {
                  challenge2: {description: 'Первый день месяца', count: 1, color: '-ch1'},
                  challenge3: {description: 'Первый день месяца', count: 1},
                  challenge4: {description: 'Первый день месяца', count: 1}
                },
                2: {
                  challenge5: {description: '43j;lkjasdfjk', count: 1}
                },
                3: {
                  challenge4: {description: '43j;lkjasdfjk', count: 1}
                },
                30: {
                  challenge2: {description: '43j;lkjasdfjk', count: 1, color: '-ch2'},
                  challenge3: {description: '43j;lkjasdfjk', count: 1}
                },
                31: {
                  challenge1: {description: 'Последний день месяца', count: 1},
                  challenge2: {description: 'Последний день месяца', count: 1, color: '-ch3'},
                  challenge3: {description: 'Последний день месяца', count: 1}
                }
              },

              1: {
                1: {
                  challenge2: {description: 'Первый день месяца', count: 1},
                  challenge3: {description: 'Первый день месяца', count: 1},
                  challenge4: {description: 'Первый день месяца', count: 1, color: '-ch4'}
                },
                2: {
                  challenge5: {description: '43j;lkjasdfjk', count: 1}
                },
                3: {
                  challenge4: {description: '43j;lkjasdfjk', count: 1}
                },
                28: {
                  challenge1: {description: 'Последний день месяца', count: 1, color: '-ch1'},
                  challenge2: {description: 'Последний день месяца', count: 1, color: '-ch2'},
                  challenge4: {description: 'Последний день месяца', count: 1, color: '-ch3'},
                  challenge3: {description: 'Последний день месяца', count: 1, color: '-ch4'}
                },
                30: {
                  challenge2: {description: '43j;lkjasdfjk', count: 1},
                  challenge3: {description: '43j;lkjasdfjk', count: 1}
                }
              },

              2: {
                1: {
                  challenge2: {description: 'Первый день месяца', count: 1},
                  challenge3: {description: 'Первый день месяца', count: 1},
                  challenge4: {description: 'Первый день месяца', count: 1}
                },
                2: {
                  challenge5: {description: '43j;lkjasdfjk', count: 1, color: '-ch1'}
                },
                3: {
                  challenge4: {description: '43j;lkjasdfjk', count: 1, color: '-ch1'}
                },
                30: {
                  challenge2: {description: '43j;lkjasdfjk', count: 1, color: '-ch1'},
                  challenge3: {description: '43j;lkjasdfjk', count: 1, color: '-ch1'}
                },
                31: {
                  challenge1: {description: 'Последний день месяца', count: 1, color: '-ch1'},
                  challenge2: {description: 'Последний день месяца', count: 2, color: '-ch1'},
                  challenge3: {description: 'Последний день месяца', count: 1, color: '-ch1'}
                }
              },

              7: {
                1: {
                  challenge1: {description: 'Последний день месяца', count: 1, color: '-ch1'},
                  challenge2: {description: 'Последний день месяца', count: 1, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 1, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 1, color: '-ch4'},
                },
                2: {
                  challenge1: {description: 'Последний день месяца', count: 1, color: '-ch1'},
                  challenge2: {description: 'Последний день месяца', count: 1, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 1, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 1, color: '-ch4'},
                },
                3: {
                  challenge1: {description: 'Последний день месяца', count: 2, color: '-ch1'},
                  challenge2: {description: 'Последний день месяца', count: 2, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 2, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 2, color: '-ch4'},
                },
                4: {
                  challenge1: {description: 'Последний день месяца', count: 3, color: '-ch1'},
                  challenge2: {description: 'Последний день месяца', count: 3, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 3, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 3, color: '-ch4'},
                },
                5: {
                  challenge1: {description: 'Последний день месяца', count: 4, color: '-ch1'},
                  challenge2: {description: 'Последний день месяца', count: 4, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 4, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 4, color: '-ch4'},
                },

                8: {
                  challenge2: {description: 'Последний день месяца', count: 1, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 1, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 1, color: '-ch4'},
                },

                9: {
                  challenge2: {description: 'Последний день месяца', count: 1, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 1, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 1, color: '-ch4'},
                },
                10: {
                  challenge2: {description: 'Последний день месяца', count: 2, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 2, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 2, color: '-ch4'},
                },
                11: {
                  challenge2: {description: 'Последний день месяца', count: 3, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 3, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 3, color: '-ch4'},
                },
                12: {
                  challenge2: {description: 'Последний день месяца', count: 4, color: '-ch2'},
                  challenge3: {description: 'Последний день месяца', count: 4, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 4, color: '-ch4'},
                },

                15: {
                  challenge3: {description: 'Последний день месяца', count: 1, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 1, color: '-ch4'},
                },

                16: {
                  challenge3: {description: 'Последний день месяца', count: 1, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 1, color: '-ch4'},
                },
                17: {
                  challenge3: {description: 'Последний день месяца', count: 2, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 2, color: '-ch4'},
                },
                18: {
                  challenge3: {description: 'Последний день месяца', count: 3, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 3, color: '-ch4'},
                },
                19: {
                  challenge3: {description: 'Последний день месяца', count: 4, color: '-ch3'},
                  challenge4: {description: 'Последний день месяца', count: 4, color: '-ch4'},
                },

                22: {
                  challenge5: {description: 'Последний день месяца', count: 1, color: '-ch5'},
                },

                23: {
                  challenge4: {description: 'Последний день месяца', count: 1, color: '-ch4'},
                },
                24: {
                  challenge4: {description: 'Последний день месяца', count: 2, color: '-ch4'},
                },
                25: {
                  challenge4: {description: 'Последний день месяца', count: 3, color: '-ch4'},
                },
                26: {
                  challenge4: {description: 'Последний день месяца', count: 4, color: '-ch4'},
                },
              }
            }
          },
          2021: {}
        }
      },

      // challengesUser: {
      //   challenge1: {color: 'ch1'},
      //   challenge2: {color: 'ch2'},
      //   challenge3: {color: 'ch3'},
      //   challenge4: {color: 'ch4'},
      //   challenge5: {color: 'ch5'}
      // }
    }
  },

  async mounted() {
    const $el = document.querySelector('.myCalendar')

    const calendarGraph = this.calendarGraph
    // const challengesUser = this.challengesUser

    // приоритет показа челленджей
    const challenges = [
      'challenge5', 'challenge1', 'challenge2', 'challenge3', 'challenge4'
    ]

    // console.log(calendarGraph.years[2020].month[0][31].challenge2.description) // Последний день месяца)

    const deltaX = 15
    const deltaY = 15

    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const currentDay = date.getDate()
    const currentDayWeek = date.getDay()
    const currentTimestamp = date.getTime()

    const lastYear = currentYear - 1
    let lastDate = new Date(lastYear, currentMonth , currentDay)
    const lastDayWeek = lastDate.getDay()
    // если год начинается не с воскресенья, то сдвинуть до воскресенья
    const lastDay = (lastDayWeek !== 0) ? currentDay - lastDayWeek : currentDay
    lastDate = new Date(lastYear, currentMonth , lastDay)
    let lastTimestamp = lastDate.getTime()

    const deltaTimestamp = currentTimestamp - lastTimestamp
    const countWeeks = Math.ceil(deltaTimestamp / (24 * 3600 * 1000) / 7) // кол-во недель

    const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
    const month = [
      'Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'
    ]

    let arrMonthInSunday = [] // all sunday
    let arrFirstSundayMonth = [] // first sunday month

    // console.log('\n',
    //   'date:', date.toLocaleDateString(),'\n',
    //   'currentYear', currentYear,
    //   'currentMonth', currentMonth,
    //   'currentDay', currentDay,'\n',
    //   'currentDayWeek', currentDayWeek, days[currentDayWeek],'\n','\n',
    //   'lastDate:', lastDate.toLocaleDateString(),'\n',
    //   'lastYear', lastYear,
    //   'lastDay', lastDay,'\n',
    //   'lastDayWeek', lastDayWeek, days[lastDayWeek],'\n',
    // )

    function createAllDays() {
      let html = ''
      let x = 0
      const beforeLastCountWeeks = countWeeks - 1 // все недели кроме текущей
      for (let i = 0; i < countWeeks; i++) {
        if (i !== beforeLastCountWeeks) {
          html += `<g transform="translate(${x}, 0)">${createWeek()}</g>`
        } else {
          html += `<g transform="translate(${x}, 0)">${createWeek(true)}</g>`
        }
        x += deltaX
      }

      createarrFirstSundayMonth()

      return html
    }

    function createWeek(currentWeek) {
      let html = ''
      let y = 0
      if (!currentWeek) {
        for (let i = 0; i < 7; i++) {
          if (!i) {
            // добавляем номер месяца каждого воскресенья
            arrMonthInSunday.push(new Date(lastTimestamp).getMonth())
          }
          html += getTemplateDay(y, lastTimestamp)
          y += deltaY
          lastTimestamp = lastTimestamp + (24 * 3600 * 1000)
        }
      } else {
        for (let i = 0; i < (currentDayWeek + 1); i++) {
          if (!i) {
            // добавляем номер месяца каждого воскресенья
            arrMonthInSunday.push(new Date(lastTimestamp).getMonth())
          }
          html += getTemplateDay(y, lastTimestamp)
          y += deltaY
          lastTimestamp = lastTimestamp + (24 * 3600 * 1000)
        }
      }
      return html
    }

    function createarrFirstSundayMonth() {
      for(let i = 0; i < 12; i++) {
        arrFirstSundayMonth.push(arrMonthInSunday.indexOf(i))
      }
    }

    function createLabelsMonths() {
      let html = ''
      let firstMonth = arrFirstSundayMonth.findIndex(item => item < 2) // index in arrFirstSundayMonth
      let secondMonth = arrFirstSundayMonth.findIndex(item => item > arrFirstSundayMonth[firstMonth] && item <= 5) // если нет, то -1 // 5 - максимальное число колонок/недель в одном месяце
      console.log(arrFirstSundayMonth, 'firstMonth: ', firstMonth, 'secondMonth: ', secondMonth)

      for (let i = 0; i < (arrFirstSundayMonth.length); i++) {
        // если есть первый элемент в первых 2 колонаках и есть второй элемент в первых 5 колонаках
        if (i !== firstMonth && secondMonth !== -1) {
          html += `<text x="${deltaX * arrFirstSundayMonth[i] + 16}" y="-8" class="month">${month[i]}</text>`
        } else {
          const currentMonthStartPosition = arrMonthInSunday.indexOf(firstMonth, -5) // 5 - максимальное число колонок/недель в одном месяце
          html += `<text x="${deltaX * currentMonthStartPosition + 16}" y="-8" class="month">${month[firstMonth]}22</text>`
          if (currentMonthStartPosition !== -1) {
            // если первый месяц переехал в конец графика,
            // то смотрим сколько пустых колонок в начале графика и если больше 3,
            // то дублируем этот же месяц в начале
            if (arrFirstSundayMonth[secondMonth] > 3) {
              html += `<text x="${deltaX + 1}" y="-8" class="month">${month[firstMonth]}</text>`
            }
          }
        }
      }

      return html
    }

    function getTemplateDay(y, lastTimestamp) {
      return `<rect class="day"
                width="11" height="11"
                x="16" y="${y}"
                fill="var(--color-calendar-graph-day-bg${getColor(lastTimestamp)})"
                data-count="0"
                data-date="${new Date(lastTimestamp).toLocaleDateString()}">
              </rect>`
    }

    function getColor(timestamp) {
      const year = new Date(timestamp).getFullYear()
      const month = new Date(timestamp).getMonth()
      const day = new Date(timestamp).getDate()

      if ( !calendarGraph.years[year]
        || !calendarGraph.years[year].month
        || !calendarGraph.years[year].month[month]
        || !calendarGraph.years[year].month[month][day]) {
        // ..если нет года, месяца или дня (undefined)
        return ''
      }

      let colors = []

      for (let i = 0; i < challenges.length; i++) {
        if ( !calendarGraph.years[year].month[month][day][challenges[i]]
          || !calendarGraph.years[year].month[month][day][challenges[i]].color) {
            // ничего не делаем, если нет challenge или цвета (undefined)
        } else {
          const ch = calendarGraph.years[year].month[month][day][challenges[i]]
          colors.push({
            color: ch.color,
            count: ch.count
          })
        }
      }
      // console.log(colors)
      if (colors.length <= 1) {
        return colors.length < 1 ? '' : `${colors[0].color}-${colors[0].count}`
      } else {
        // console.log('НЕСКОЛЬКО ЦВЕТОВ В ОДНОМ RECT!')
        // console.log(challengesUser)
        // console.log(challenges) // ["challenge1", "challenge2", "challenge3", "challenge4", "challenge5"]
        // console.log(colors) // ["-ch1", "-ch2", "-ch4", "-ch3"]
        for (let i = 0; i < challenges.length; i++) {
          // console.log(colors[i])
          if (colors[i]) {
            return `${colors[i].color}-${colors[i].count}`
          }
        }
      }
    }

    let resultHtml = `
      <div class="mt3 border py-2 graph-before-activity-overview">
        <svg width="${deltaX * countWeeks + 28}" height="128" class="js-calendar-graph-svg">
          <g transform="translate(10, 20)" data-hydro-click="{&quotevent_type&quot:&quotuser_profile.click&quot,&quotpayload&quot:{&quotprofile_user_id&quot:59876378,&quottarget&quot:&quotCONTRIBUTION_CALENDAR_SQUARE&quot,&quotuser_id&quot:59876378,&quotoriginating_url&quot:&quothttps://github.com/CyberPunk10&quot}}" data-hydro-click-hmac="4852aa4a3d29cdad070926f4ff435c872cd50c7f37b83f5d4802f48f13829f8c">
            ${createAllDays()}
            ${createLabelsMonths()}
            <text text-anchor="start" class="wday" dx="-10" dy="8" style="display: none">Sun</text>
            <text text-anchor="start" class="wday" dx="-5" dy="25">Пн</text>
            <text text-anchor="start" class="wday" dx="-5" dy="38" style="display: none">Вт</text>
            <text text-anchor="start" class="wday" dx="-5" dy="54">Ср</text>
            <text text-anchor="start" class="wday" dx="-10" dy="57" style="display: none">Thu</text>
            <text text-anchor="start" class="wday" dx="-5" dy="84">Пт</text>
            <text text-anchor="start" class="wday" dx="-10" dy="81" style="display: none">Sat</text>
          </g>
        </svg>
      </div>
    `

    $el.innerHTML = resultHtml

  },

  methods: {

  }
}
</script>

<style>
/* :root {
  --color-calendar-graph-day-bg-ch1-1: hsl(130, 64%, 76%);
  --color-calendar-graph-day-bg-ch1-2: hsl(136, 53%, 51%);
  --color-calendar-graph-day-bg-ch1-3: hsl(136, 54%, 41%);
  --color-calendar-graph-day-bg-ch1-4: hsl(139, 54%, 28%);

  --color-calendar-halloween-graph-day-L2-bg: hsl(54, 100%, 65%);
  --color-calendar-halloween-graph-day-L2-bg: hsl(46, 100%, 50%);
  --color-calendar-halloween-graph-day-L3-bg: hsl(35, 100%, 50%);

    --color-scale-blue-3: hsl(212, 100%, 74%);
    --color-scale-blue-4: hsl(212, 100%, 56%);
    --color-scale-blue-5: hsl(212, 97%, 43%);
    --color-scale-blue-7: hsl(212, 94%, 28%);
  } */
</style>

<style lang="sass">
:root
  --color-calendar-graph-day-bg: #ebedf0
  --color-calendar-graph-day-bg-ch1-1: #9be9a8
  --color-calendar-graph-day-bg-ch1-2: #40c463
  --color-calendar-graph-day-bg-ch1-3: #30a14e
  --color-calendar-graph-day-bg-ch1-4: #216e39

  --color-calendar-graph-day-bg-ch2-1: hsl(212, 100%, 74%)
  --color-calendar-graph-day-bg-ch2-2: hsl(212, 100%, 56%)
  --color-calendar-graph-day-bg-ch2-3: hsl(212, 97%, 43%)
  --color-calendar-graph-day-bg-ch2-4: hsl(212, 94%, 28%)

  --color-calendar-graph-day-bg-ch3-1: hsl(54, 100%, 65%)
  --color-calendar-graph-day-bg-ch3-2: hsl(46, 100%, 50%)
  --color-calendar-graph-day-bg-ch3-3: hsl(35, 100%, 50%)
  --color-calendar-graph-day-bg-ch3-4: #f66a0a

  --color-calendar-graph-day-bg-ch4-1: rgba(31, 32, 65, 0.30)
  --color-calendar-graph-day-bg-ch4-2: rgba(31, 32, 65, 0.45)
  --color-calendar-graph-day-bg-ch4-3: rgba(31, 32, 65, 0.60)
  --color-calendar-graph-day-bg-ch4-4: rgba(31, 32, 65, 0.85)

  --color-calendar-graph-day-bg-ch5-1: pink
  --color-calendar-graph-day-bg-ch5-2: pink
  --color-calendar-graph-day-bg-ch5-3: pink
  --color-calendar-graph-day-bg-ch5-4: pink


.calendar-graph-wrap,
.myCalendar
  width: 91rem
  margin: 0 auto

.myCalendar > div
  display: flex
  justify-content: center

.mt3
  margin-top: 3rem

.graph-before-activity-overview
  border-top-left-radius: 6px
  border-top-right-radius: 6px

.py-2
  padding-top: 8px!important
  padding-bottom: 8px!important

.border
  border: 1px solid $color-dark-shade-10

.calendar-graph rect.day,
.myCalendar rect.day
  shape-rendering: geometricPrecision
  outline: 1px solid $color-dark-shade-10
  outline-offset: -1px
  rx: 2
  ry: 2

rect
  width: 11
  height: 11
  // x: 16
  // y: 0
  // fill: #ebedf0

.myCalendar rect.day
  rx: 2
  ry: 2

.calendar-graph text.month,
.myCalendar text.month
  font-size: 10px

.calendar-graph text.wday,
.myCalendar text.wday
  font-size: 9px

*
  box-sizing: border-box

text
  display: block
  white-space: nowrap

.text-center
  text-align: center !important

body
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji
  line-height: 1.5

</style>
