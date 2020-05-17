import {lesson} from './lesson/overview';

class Navigation {
    public navigateByUrl(url): void {
        return browser.url(url ? url : '');
    }

    public navigateToLesson(lesson: string): any {
        this.navigateByUrl(`/lessons?id=${lesson}`);
        return lesson;
    }

    public refresh(): void {
        //<code for refresh page by url>
    }
}

let navigation: Navigation;
navigation = new Navigation();

export {navigation};