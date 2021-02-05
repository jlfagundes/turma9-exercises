const workDays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];
const weekDays = [ 'Sunday', ...workDays, 'Saturday'];

test('test if Sunday is week day', () => {
    expect(weekDays).toContain('Sunday')
});

test('test if Sunday not is work day', () => {
    expect(workDays).not.toContain('Sunday');
});