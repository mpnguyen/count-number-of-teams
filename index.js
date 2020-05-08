const countTeams = (rating) => {
    const findSubset = (arr, index, data, i) => {
        if (index === 3) {
            let isUp = true
            let isDown = true
            let temp = data[0]
            for (let j = 1; j < 3; j++) {
                if (data[j] > temp) {
                    isDown = false
                }

                if (data[j] < temp) {
                    isUp = false
                }
                temp = data[j]
            }
            if (isUp || isDown) {
                return 1
            }

            return 0;
        }

        if (i >= arr.length) return 0;

        data[index] = arr[i];
        let count = 0
        count += findSubset(arr, index + 1, data, i + 1);
        count += findSubset(arr, index, data, i + 1);

        return count
    }

    const data = [];
    return findSubset(rating, 0, data, 0);
}
