import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isQuizInProgress, setQuizInProgress] = useState(false);

    function startQuiz(): void {
        setQuizInProgress(true);
        setAttempts(attempts - 1);
    }

    function StopQuiz(): void {
        setQuizInProgress(false);
    }

    function Mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <>
            <div>
                <div>
                    Number of Attempts: <span> {attempts} </span>
                </div>
                <Button onClick={startQuiz} disabled={isQuizInProgress}>
                    Start Quiz
                </Button>
                <Button onClick={StopQuiz} disabled={!isQuizInProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={Mulligan} disabled={isQuizInProgress}>
                    Mulligan
                </Button>
            </div>
            <div>
                {attempts === 0 && isQuizInProgress ? (
                    <span>Cannot Start Quiz! Out of Attempts!</span>
                ) : (
                    <span>All Okay!</span>
                )}
            </div>
        </>
    );
}
