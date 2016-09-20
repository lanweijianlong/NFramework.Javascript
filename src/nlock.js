(function (window) {
    window.NF || (window.NF = {});

    var DefaultLockName = "DefaultLockName";
    function getName(name) {
        if (!(name && name != ''))
            name = DefaultLockName;
        return name;
    };
    window.NF.NLock = window.NLock = {
        lock: function (name) {
            var lockName = getName(name);

            if (this.Locks[lockName])
                if (this.Locks[lockName] == true) {
                    console.info("Already locked!");
                    return;
                }

            this.Locks[lockName] = true;
        },
        isLocked: function (name) {
            var lockName = getName(name);

            return this.Locks[lockName] || false;
        },
        unLock: function (name) {
            var lockName = getName(name);

            this.Locks[lockName] = false;
        },

        Locks: {}
    };
})(window);