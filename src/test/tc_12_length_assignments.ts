import {expect} from 'chai';
import {navigation} from '../pages/navigation';

describe('TC-12 Check length of the assignment queue for lesson at the same time in the lesson form', () => {
    let lessonForm: any;
    before('', () => {
        //Navigate to the lesson
        lessonForm = navigation.navigateToLesson('history 1');
    });
    it('should be displayed only 7 assignments', async function () {
        const assignments = lessonForm.assignments.length;
        expect(assignments).equal(7, 'There are more than 7 assignments in the assignments queue in the lesson');
    });
});
