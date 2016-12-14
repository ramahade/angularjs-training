/**
 * Created by rajmahad on 12/13/2016.
 */
describe('entryStore', function () {
    beforeEach(module('training.angularjs.exercise01.entryStore'));

    it('Testing add', inject(function (entryStore) {
        expect(entryStore).toBeTruthy();
        var entries = entryStore.getEntries();
        entryStore.add("a");
        expect(entries.length).toBe(1);
        entryStore.add("a");
        expect(entries.length).toBe(1);
        entryStore.add("b");
        expect(entries.length).toBe(2);
    }));
});