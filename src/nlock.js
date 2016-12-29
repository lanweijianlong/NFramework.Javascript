(function (window) {
    window.NF || (window.NF = {});

    var DefaultLockName = "DefaultLockName";
    function getLockName(name) {
        if (!(name && name != ''))
            name = DefaultLockName;
        return name;
    };
    function getSubmitLockName(name) {
        if (!(name && name != ''))
            name = DefaultLockName;
        return name + "_Submit";
    };
    window.NF.NLock = window.NLock = {
        lock: function (name) {
            var lockName = getLockName(name);

            if (this.Locks[lockName])
                if (this.Locks[lockName] == true) {
                    console.info("Already locked!");
                    return;
                }

            this.Locks[lockName] = true;
        },
        isLocked: function (name) {
            var lockName = getLockName(name);

            return this.Locks[lockName] || false;
        },
        unLock: function (name) {
            var lockName = getLockName(name);

            this.Locks[lockName] = false;
        },
        lockSubmit: function (name) {
            var lockName = getSubmitLockName(name);
            if (this.isLocked(lockName)) {
                console.info("ALready locked,can not submit!");
                return false;
            }
            this.lock(lockName);
            return true;
        },
        unlockSubmit:function(name){
            var lockName = getSubmitLockName(name);
            this.unLock(lockName);
        },

        Locks: {}
    };
})(window);