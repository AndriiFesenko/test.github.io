class MyApp {
    constructor() {
        this.questions = [
            {
                question: 'Что такое тестирование ',
                answer: `это процесс исследования , испытания программного 
                        продукта, проверка соответствия между реальным 
                        поведением программы и его ожидаемым поведением.`
            },
            {
                question: 'назовите цели тестирования',
                answer: `1.	Предоставление информации 	о качестве ПО конечному заказчику.
                        2.	Повышение качества ПО
                        3.	Предотвращение появления дефектов.
                        Главная задача тестирования – поиск дефектов.`
            },
            {
                question: 'что такое Качество ПО ',
                answer: `это способность программного продукта при 
                        заданных условиях удовлетворять установленным потребностям.`
            },
            {
                question: 'что такое Контроль качества и гарантия качества (QC & QA);',
                answer: `QC (Quality Control) – это процесс нахождения ошибок в продукте, 
                        с целью их последующего исправления . 
                        Задачей Quality Control является поддержка качества продукта 
                        в текущий момент времени. Quality Control ориентирован на продукт , 
                        разрабатываемый в данный момент. (ориентирован на продукт и его качество)
                        QA(Quality Assurance) – это процесс, задачей которого является 
                        обеспечение качества продукта в будущем. (это процесс и его качество) 
                `
            },
            {
                question: 'Роль тестирования в процессе разработки.',
                answer: `1.	Процесс разработки невозможен без контроля качества 
                            разрабатываемого продукта.
                        2.	Тестирование позволяет оценить качество разрабатываемого продукта.`
            },
            {
                question: 'Методы контроля качества «Verification» и «Validation»',
                answer: `1.	Verification это практика проверки документов, дизайна, 
                            архитектуры, кода. Это проверка составляющих проекта.
                            (Тестирование продукта на соответсвие требованиям после бизнес аналитика)
                            a.	Verification всегда проходит без запуска кода
                            b.	Верификация использует методы reviews, walkthroughs, inspections.
                            c.	Отвечает на вопрос «Делаем ли мы продукт правильно?»
                            То есть -  Процесс.
                            d.	Верификация происходит до Валидации
                            
                        2.	Validation это процесс оценки качества конечного продукта, 
                            необходимо проверить, соответствует ли програмное обеспечение 
                            ожиданиям и требованиям клиента.
                            (Тестирование продукта на соответствие на сколько он подходит самому заказчику)
                            e.	Валидация всегда включает в себя запуск кода
                            f.	Отвечает на вопрос «Делаем ли мы правильный продукт?» То есть - Конечный результат.
                        `
            },
            {
                question: 'кто такой QA (Quality Assurance)',
                answer: ` специалист, который имеет спец знания для выполнения 
                        тестирования, четко понимает его процессы, умеет составлять 
                        документацию, проводить тестирование , а главное давать 
                        рекомендации по улучшению качества продукта и прогнозировать 
                        его поведение в разных условиях.`
            },
            {
                question: 'Необходимые навыки тестировщика ПО ',
                answer: `1.	Soft Skills 
                            a.	Черты характера
                            b.	Мотивация учиться и склонность к самообучению
                            c.	Ответственность 
                            d.	Увлеченность
                            e.	Гибкость поведения
                            f.	Коммуникабельность и контактность
                            g.	Командность
                            h.	Инициативность и решительность
                        2.	Hard Skills ---`
            },
            {
                question: 'Продукт это',
                answer: `ответ пустой`
            },
            {
                question: 'Проект  это',
                answer: `это временное предприятие , предназначенное для создания уникальных продуктов, услуг.`
            },
            {
                question: 'Основные характеристики проекта:',
                answer: `1.	Установленная цель проекта;
                        2.	Определенное время на его реализацию;
                        3.	Привлечение для его реализации разных отделов и специалистов;
                        4.	Особые требования по времени, затратам и качеству; `
            },
            {
                question: 'SDLC',
                answer: `Это процесс, направленный на создание и 
                        поддержание работоспособности, качества и надежности 
                        программного обеспечения.
                        1.	Сбор требований и анализ требований.
                            a.	Сбор требований происходит путем общения с клиентами и пользователями, чтобы определить каковы их требования.
                            b.	Происходит анализ требований. Определение , являются ли собранные требования неясными, неполными неоднозначными, противоречащими. 
                            c.	Решение выявленных проблем при анализе.
                            d.	Документирование требований (простое опысание)
                        2.	Дизайн и проектирование.
                            (Составление документации, архитектуры, выбор языка програмирования, определяется подходящая система управления базы данных)
                        3.	Программирование
                        4.	 Тестирование и отладка (тест дизайн это этап процесса тестирования ПО на котором проектируются и создаются тестовые случаи (тест кейсы)
                        5.	Эксплуатация и сопровождение.`
            },
            {
                question: 'STLC',
                answer: `1.	Анализ требований
                            a.	анализ требований и подготовка вопросов которые будут адресованы БА, ПМ)
                            b.	определить цели тестирования и приоритеы ( что и когда будет тестироваться)
                        2.	 Тестовое планирование (отредактированные требования на основе заданных вопросов ПМ, БА)
                            a.	Написание тест плана (это документ который описывает весь бьем работ по тестированию. Составляется QA Leader) 
                            b.	Составление тестовой стратегии ( как , кто будет коммуницировать, кто как будет работать с точки зрения тестирования. Виды, уровни тестирования)
                        c.	Оценка времени тестирования.
                            3.	 Написание Test Cases
                            a.	Написание тест кейсов
                            b.	Написание автотестов (если планируется)
                            c.	Подоготовка тестовых данных ( набор информации  - если работаем с интернет магазином , то тестовые данные это будут – юзера с определенными правами доступа, различные товары, информация о товарах, стоимость, наличие.).
                        4.	Подготовка тестовой среды
                            a.	Настройка тестовой среды
                            b.	Настройка всех инструментальных средств для тестирования (подготовка багтрекинговой системы, системы тест менеджмента где хранить тест кейсы, системы для автоматизации)
                        5.	Выполнение тестов
                            a.	Тестирование ПО
                            b.	Нахождение и регистрация дефектов
                            c.	Перепроверка дефектов после исправления
                        6.	Test closure
                            a.	Написание сводного отчета тестирвания
                            b.	Подведение итогов о пройденом процессе`
            },
            {
                question: 'Участники проектной команды и их роли',
                answer: `Бизнес-аналитик
                        Обеспечивает сбор требований, их обработку, документирование и передачу специалистам-разработчикам.
                        Руководитель проекта (Project Manager)
                        Руководитель проектной команды, ответственный за управление проектом, достижение целей проекта в рамках бюджета, в срок и с заданным уровнем качества.
                        Системный архитектор
                        Формирует архитектуру и идеалогию проекта, оценку имеющихся технических возможностей.
                            Администратор приложения (сис админ)
                        Обеспечивает установку и настройку сервера приложений и его компонентов, разработку дополнительных приложений. 
                            Лидер команды разработчиков (тим лид)
                        Организовывает процесс разработки на проекте, распределяет задачи, контролирует их выполнение, оценивает эффективность работы команды.
                            Разработчик приложений
                                Разрабатывает, развивает и сопровождает приложения.
                            Лидер команды тестировщиков
                        Организовывает процесс тестирования на проекте, распределяет задачи, контролирует их выполнение, оценивает эффективность работы команды
                            Тестировщик 
                                Разрабатывает тест-дизайны, проводит тестирование.`
            },
            {
                question: 'Что такое Project plan',
                answer: `Формальный, утвержденный документ, используемый для организации координации и контроля исполнения проекта.`
            },
            {
                question: 'Модели разработки ПО . Какие вы знаете?',
                answer: `«Waterfall Model» (каскадная модель или «водопад»)
                        «V-Model»
                        «Incremental Model» (инкрементная модель)
                        «RAD Model» (rapid application development model или быстрая разработка приложений)
                        «Agile Model» (гибкая методология разработки)
                        «Iterative Model» (итеративная или итерационная модель)
                        «Spiral Model» (спиральная модель)`
            },
            {
                question: 'Описание Водопадной модели разработки ПО',
                answer: `Утверждение требований 
                        Проектирование 
                        Разработка 
                        Тестирование 
                        Поддержка 

                        Плюсы каскадной модели разработки 
                            + полное документирование каждого этапа
                            + четкое планирование сроков и затрат
                            + прозрачность процессов для заказчика
                        Минусы 
                            - при внесении изменений нужно возвращаться к первой стадии
                            - увеличение затрат средств и времени в случае изменений`
            },
            {
                question: 'V образная модель ',
                answer: `Эта модель была разработана как разновидность каскадной модели, в которой особое внимание уделяется верификации и аттестации програмного продукта . Модель показывает, что тестирование продукта обсуждается, проектируется и планируется, начиная с ранних этапов жизненного цикла разработки
                        Модель включает в себя слудующие фазы:
                        1.	Составление требований к проекту и планирование
                            Определяются системные требования и выполняется планирование работ.
                        2.	Составление требований к продукту и их анализ
                            Составляется полная спецификация требований к програмному продукту.
                        3.	Высокоуровневое проектирование
                            Определяются структура програмного продукта , взаимосвязи мужду основными его компонентами и реализуемые ими функции.
                        4.	Детальное проектирование 
                            Определяется алгоритм работы каждого компонента
                        5.	Кодирование 
                            Выполняется преобразование алгоритмов в готовое программное обеспечение.
                        6.	Модульное тестирование 
                            Выполняется проверка каждого компонента или модуля програмного продукта
                        7.	Интеграционное тестирование 
                            Осуществляются интеграция програмного продукта и его тестирование
                        8.	Системное тестирование
                            Выполняется проверка функционирования ПП после помещения его в аппаратную среду в соответсвии со спецификацией требований
                        9.	Эксплуатация и сопровождение 
                            Запуск ПП в производство`
            },
            {
                question: 'none',
                answer: ``
            },
            {
                question: 'none',
                answer: ``
            }
        ]
        this.questionPlace = document.getElementsByClassName('question')[0];
        this.answerPlace = document.getElementsByClassName('answer')[0];
        this.amountQuestions = document.querySelector('.amount');
        this.nextButton = document.querySelector('.next-button');
        this.showAnswerButton = document.querySelector('.show-answer-button');

        this.getRandomQuestion(this.questions);
        this.countAmountQuestions();
        this.index;

        this.showAnswerButton.onclick = () => this.onShowAnswerClick(this.index);
        this.nextButton.onclick = () => this.getRandomQuestion(this.questions);
    }

    getRandomQuestion(arr) {
        this.answerPlace.style.display = 'none'
        let randomIndex = Math.floor(Math.random()* arr.length);
        this.index = randomIndex;
        this.setRandomQuestion(this.questions[randomIndex]);
    }
    setRandomQuestion(element) {
        this.questionPlace.innerHTML = element.question;
        this.answerPlace.innerHTML = element.answer;
    }
    onShowAnswerClick(index) {
        this.answerPlace.innerHTML = this.questions[index].answer;
        this.answerPlace.style.display = 'flex'
    }
    countAmountQuestions() {
        this.amountQuestions.innerHTML = `questions are: ${this.questions.length}`
    }
}

const myapp = new MyApp();