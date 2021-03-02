const workDays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];
const weekDays = [ 'Sunday', ...workDays, 'Saturday'];

describe('Tests of requeriments', () => {

    it('test if Sunday is week day', () => {
    expect(weekDays).toContain('Sunday')
    });

    it('test if Sunday not is work day', () => {
    expect(workDays).not.toContain('Sunday');
    });

});