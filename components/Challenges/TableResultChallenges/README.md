# TABLE

**Test.**

This components.

_test_

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/views#layouts).

### TableGridResultCh

**:data_tables="posts"** - _данные для таблицы_ (type: [Array])

**fixed_first_col="{ key: 'login', title: 'Логин' }"** - _если необходимо зафиксировать первый столбец_ (type: [Object]), options: key, title, formatted

**fixed_last_col="{ key: 'login', title: 'Логин' }"** - _если необходимо зафиксировать последний столбец_ (type: [Object]), options: key, title, formatted

**:onlyNeedCenterCols="onlyNeedCenterCols"** - _если нужно вывести не все столбцы, то указываем только те, которые нужны в том порядке, в котором хотим их видеть, при этом фиксированные столбцы здесь задавать не нужно, они задаются отдельно через 'fixed_first_col' и 'fixed_first_col'_ (type: [Array]), options: key, title, formatted



#### options:
key: 'created' - ключ, соответствующий ключу в data_tables
title: 'Дата создания' - заголовок таблицы. Если не обозначать, то подставится key
sort: 'text' - если указан, значит есть сорьтровка + указываем тип сортировки ('text', 'numbers')
formatter: 'datetime' - указываем, если нужно отобразить текст в нужном виде. ('date', 'time', 'datetime')




### TableGridResultChRenderByRow

Версия с датой рендерится по другой логике и принимает в себя вместо массива, объект с массивами

// отжимания
  dataPushUps: {
    players: [
      { id: 1,
        name: 'Костя',
        result: [30, 30, 30, 30, 30, 30, 5 ]
      },
      { id: 2,
        name: 'Игорь',
        result: [30, 30, 30, 30, 30, 30, 5 ]
      }
    ],
    dates: [
      '2020-11-14T09:29:03.824+00:00',
      '2020-11-15T09:29:03.824+00:00',
      '2020-11-16T09:29:03.824+00:00',
      '2020-11-17T09:29:03.824+00:00',
      '2020-11-21T09:29:03.824+00:00',
      '2020-11-29T09:29:03.824+00:00',
      '2020-11-20T09:29:03.824+00:00'
    ]
  }
