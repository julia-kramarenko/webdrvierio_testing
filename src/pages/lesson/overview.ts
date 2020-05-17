class Overview {
    public get title(): WebdriverIO.Element {
        return browser.$("#title_lesson");
    }

    public get form(): WebdriverIO.Element {
        return browser.$("lesson_form");
    }

    public get assignments(): object {
        const assignmentsSelector = '[class="assignments"]';
        return {
            list: browser.$$(assignmentsSelector),
            length: browser.$$(assignmentsSelector).length
        }
    }
}

let lesson: Overview;
lesson = new Overview();

export {lesson};